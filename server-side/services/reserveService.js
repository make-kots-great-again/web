import { makeReserve } from '../domain'
import { groupService, productService } from './index'

export default function reserveServiceFactory ({ reserveRepository }) {
  return Object.freeze({
    listGroupReserveItems, addProductInReserve, patchValidityOfAnItem, patchQuantityOfAnItem, patchQuantityAndDayOfAnItem, removeItemFromReserve
  })

  async function listGroupReserveItems ({ groupId }) {
    const groupInfo = await groupService.getGroup({ groupId })

    if (groupInfo.message) {
      return {
        statusCode: groupInfo.statusCode,
        message: groupInfo.message
      }
    }

    const result = []

    const reserve = await reserveRepository.findGroupReserveItems({ groupId })

    reserve.forEach(x => {
      result.push({
        id: x.dataValues.id,
        code: x.dataValues.productInfo.dataValues.code,
        product_name: x.dataValues.productInfo.dataValues.product_name,
        product_brand: x.dataValues.productInfo.dataValues.brands,
        quantity: x.dataValues.quantity,
        expiringIn: x.dataValues.expiringIn,
        valid: x.dataValues.valid
      })
    })

    return result
  }

  async function addProductInReserve ({ groupIdBarcode, ...reserveInfo }) {
    let groupInfo = {}
    const groupId = !!(groupIdBarcode.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i))
    const groupBarCode = groupIdBarcode.length === 12

    if (groupId || groupBarCode) {
      if (groupId) {
        groupInfo = await groupService.getGroup({ groupId: groupIdBarcode })
        if (groupInfo.message) return { message: groupInfo.message }
      } else if (groupBarCode) {
        groupInfo = await groupService.getGroupByBarCode({ groupBarCode: groupIdBarcode })
        if (groupInfo.message) return { message: groupInfo.message }
      }

      const product = await productService.getProductCode({ code: reserveInfo.code })
      if (product.message) return { message: product.message }

      const allSimilarItems = await reserveRepository.findReserveItems({
        groupId: groupInfo.dataValues.groupId,
        code: reserveInfo.code
      })
      let allValidSimilarItems = allSimilarItems.filter(item => { return item.dataValues.valid === true })
      const allInValidSimilarItems = allSimilarItems.filter(item => { return item.dataValues.valid === false })
      allValidSimilarItems = allValidSimilarItems.sort((a, b) => {
        const aDate = new Date().setDate(a.dataValues.createdAt.getDate() + a.dataValues.expiringIn)
        const bDate = new Date().setDate(b.dataValues.createdAt.getDate() + b.dataValues.expiringIn)
        if (aDate > bDate) return 1
        else if (aDate < bDate) return -1
        return 0
      })

      const today = new Date()

      if (reserveInfo.quantity > 0) {
        if (allInValidSimilarItems.length != 0) {
          const newItemExpDate = new Date().setDate(today.getDate() + reserveInfo.expiringIn)
          for (const item of allInValidSimilarItems) {
            const itemExpDate = new Date().setDate(item.dataValues.createdAt.getDate() + item.dataValues.expiringIn)
            const dateDiff = Math.floor(Math.abs(newItemExpDate - itemExpDate) / 86400000)
            if (dateDiff == 0) {
              // console.log(" + update"); //TODO - remove
              reserveInfo.quantity = item.dataValues.quantity + reserveInfo.quantity
              const newReserveProduct = makeReserve({ ...reserveInfo })
              return await reserveRepository.updateReserveItem({
                itemId: item.dataValues.id,
                quantity: newReserveProduct.getProductQuantity(),
                expiringIn: newReserveProduct.getExpiringIn(),
                valid: false
              })
            }
          }
          // console.log(" + new doublon"); //TODO - remove
          const newReserveProduct = makeReserve({ ...reserveInfo })
          return await reserveRepository.save({
            groupId: groupInfo.dataValues.groupId,
            code: newReserveProduct.getProductCode(),
            quantity: newReserveProduct.getProductQuantity(),
            expiringIn: newReserveProduct.getExpiringIn(),
            valid: false
          })
        } else {
          // console.log(" + new unique"); //TODO - remove
          const newReserveProduct = makeReserve({ ...reserveInfo })
          return await reserveRepository.save({
            groupId: groupInfo.dataValues.groupId,
            code: newReserveProduct.getProductCode(),
            quantity: newReserveProduct.getProductQuantity(),
            expiringIn: newReserveProduct.getExpiringIn(),
            valid: false
          })
        }
      } else {
        if (allValidSimilarItems.length != 0) {
          let quantToRemove = Math.abs(reserveInfo.quantity) // la qtty que je veux enlever
          for (const item of allValidSimilarItems) {
            const prevQuantToRemove = quantToRemove
            quantToRemove = quantToRemove - item.dataValues.quantity
            // console.log(quantToRemove);
            if (quantToRemove >= 0) {
              await reserveRepository.removeItemFromReserve({ id: item.dataValues.id })
            } else {
              reserveInfo.quantity = item.dataValues.quantity - Math.abs(prevQuantToRemove)
              reserveInfo.expiringIn = item.dataValues.expiringIn
              const newReserveProduct = makeReserve({ ...reserveInfo })
              return await reserveRepository.updateReserveItem({
                itemId: item.dataValues.id,
                quantity: newReserveProduct.getProductQuantity(),
                expiringIn: newReserveProduct.getExpiringIn(),
                valid: true
              })
            }
          }
        }
        return { message: 'No product was found!' }
      }
    } else {
      return { message: `No group was found with this id ${groupIdBarcode}` }
    }
  }

  async function patchValidityOfAnItem ({ ...validatedItem }) {
    if (!validatedItem.itemId) return { message: 'You must supply the item id.' }

    if (!(validatedItem.itemId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i))) { return { message: `${validatedItem.itemId} is not a valid UUID` } }

    const thisItem = await reserveRepository.findReserveItemById(validatedItem.itemId)

    const allSimilarItems = await reserveRepository.findReserveItems({
      groupId: thisItem.dataValues.groupId,
      code: thisItem.dataValues.code
    })
    const allValidSimilarItems = allSimilarItems.filter(item => { return item.dataValues.valid === true })

    if (allValidSimilarItems.length != 0) {
      const thisItemExpDate = new Date().setDate(thisItem.dataValues.createdAt.getDate() + thisItem.dataValues.expiringIn)
      for (const item of allValidSimilarItems) {
        const itemExpDate = new Date().setDate(item.dataValues.createdAt.getDate() + item.dataValues.expiringIn)
        const dateDiff = Math.floor(Math.abs(thisItemExpDate - itemExpDate) / 86400000)
        if (dateDiff == 0) {
          const updatedItem = {
            code: Number(item.dataValues.code),
            quantity: item.dataValues.quantity + thisItem.dataValues.quantity,
            expiringIn: item.dataValues.expiringIn,
            valid: true
          }
          const reserveProduct = makeReserve({ ...updatedItem })
          await reserveRepository.removeItemFromReserve({ id: thisItem.dataValues.id })
          return await reserveRepository.updateReserveItem({
            itemId: item.dataValues.id,
            quantity: reserveProduct.getProductQuantity(),
            expiringIn: reserveProduct.getExpiringIn(),
            valid: reserveProduct.getvalid()
          })
        }
      }
    }
    return await reserveRepository.patchValidityOfAnItem(validatedItem.itemId, validatedItem.validity)
  }

  // TODO : implémenter la vérification l'existance de l'item deleted
  async function patchQuantityOfAnItem (updateInfos) {
    if (!updateInfos.itemId) return { message: 'You must supply the item id.' }

    if (!(updateInfos.itemId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i))) { return { message: `${updateInfos.itemId} is not a valid UUID` } }

    /* const findItem = await shoppingListRepository.findById({shoppingListId: itemId});

        if (!findItem)
            return {message: `No item with this id '${itemId}' was found in the shopping list !`};
        */

    return await reserveRepository.patchQuantityOfAnItem(updateInfos.itemId, updateInfos.quantity)
  }

  // TODO : implémenter la vérification l'existance de l'item deleted
  async function patchQuantityAndDayOfAnItem (updateInfos) {
    if (!updateInfos.itemId) return { message: 'You must supply the item id.' }

    if (!(updateInfos.itemId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i))) { return { message: `${updateInfos.itemId} is not a valid UUID` } }

    /* const findItem = await shoppingListRepository.findById({shoppingListId: itemId});

        if (!findItem)
            return {message: `No item with this id '${itemId}' was found in the shopping list !`};
        */

    return await reserveRepository.patchQuantityAndDayOfAnItem(updateInfos.itemId, updateInfos.quantity, updateInfos.expiringIn)
  }

  async function removeItemFromReserve (itemId) {
    if (!itemId) return { message: 'You must supply the item id.' }

    if (!(itemId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i))) { return { message: `${itemId} is not a valid UUID` } }

    /* const findItem = await shoppingListRepository.findById({shoppingListId: itemId});

        if (!findItem)
            return {message: `No item with this id '${itemId}' was found in the shopping list !`};
        */
    return reserveRepository.removeItemFromReserve({ id: itemId })
  }
}
