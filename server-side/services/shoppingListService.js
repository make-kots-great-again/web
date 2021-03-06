import { makeShoppingList } from '../domain'
import { groupService, userService, productService } from './index'

export default function shoppingListServiceFactory ({ shoppingListRepository }) {
  return Object.freeze({
    listMyShoppingLists,
    putProductInShoppingList,
    removeProductFromShoppingList,
    getGroupShoppingList,
    editItemQuantity
  })

  async function listMyShoppingLists ({ userId }) {
    if (!userId) return { message: 'You must supply a user id.' }

    const findUserGroups = await groupService.listMyGroups({ userId })

    if (findUserGroups.length === 0) return []

    const { groups } = findUserGroups[0].dataValues

    const info = []

    for (const x of groups) {
      const shoppingList = await shoppingListRepository.findGroupShoppingList({ groupId: x.dataValues.groupId })

      if (shoppingList.length === 0) {
        const findGroupName = await groupService.getGroup({ groupId: x.dataValues.groupId })

        info.push(
          {
            groupId: x.dataValues.groupId,
            list: (x.dataValues.roleInThisGroup.dataValues.role !== 'personal')
              ? `Liste ${findGroupName.dataValues.groupName}` : findGroupName.dataValues.groupName,
            listType: (x.dataValues.roleInThisGroup.dataValues.role === 'personal') ? 'PERSONAL' : 'GROUP'
          })
      }

      for (const y of shoppingList) {
        const findUsername = await userService.listOneUser({ id: y.dataValues.owners.dataValues.userId })

        const findGroupName = await groupService.getGroup({ groupId: x.dataValues.groupId })

        info.push(
          {
            code: y.dataValues.product.dataValues.code,
            product_name: y.dataValues.product.dataValues.product_name,
            product_brand: y.dataValues.product.dataValues.brands,
            half_peremption_date: y.dataValues.product.dataValues.half_peremption_date,
            product_note: y.dataValues.productNote,
            quantity: y.dataValues.quantity,
            groupId: x.dataValues.groupId,
            shoppingListId: y.dataValues.id,
            listType: (y.dataValues.owners.dataValues.role !== 'personal') ? 'GROUP' : 'PERSONAL',
            groupProduct: y.dataValues.groupProduct,
            username: (y.dataValues.groupProduct) ? 'group' : findUsername.dataValues.username,
            list: (y.dataValues.owners.dataValues.role !== 'personal')
              ? `Liste ${findGroupName.dataValues.groupName}` : findGroupName.dataValues.groupName
          })
      }
    }

    return info
      .filter(x => !!x.list)
      .reduce((result, item) => ({
        ...result, [item.list]: [...(result[item.list] || []), item]
      }), {})
  }

  async function putProductInShoppingList ({ groupId, userId, ...productInfo }) {
    const groupInfo = await groupService.getGroup({ groupId })

    if (groupInfo.message) return { message: groupInfo.message }

    const findGroup = await groupService.getIdGroupUser({
      groupId: groupId,
      userId: userId
    })

    if (findGroup.message) return { message: findGroup.message }

    const findUser = await userService.listOneUser({ id: userId })

    const findList = await getGroupShoppingList({ groupId: groupId })

    const product = makeShoppingList({ ...productInfo })

    if (product.getgroupProduct()) {
      const existingGroupProduct = findList.find(x =>
        Number(x.code) === Number(productInfo.code) && x.groupProduct)

      if (existingGroupProduct) {
        return {
          statusCode: 409,
          message: `${existingGroupProduct.product_name} est déjà dans liste !`
        }
      }
    }

    const existingProduct = findList.find(x =>
      Number(x.code) === Number(productInfo.code) &&
            x.username === findUser.dataValues.username &&
            x.groupProduct === product.getgroupProduct())

    if (existingProduct) {
      return {
        statusCode: 409,
        message: `Vous avez déjà ${existingProduct.product_name}`
      }
    }

    const findProductCode = await productService.getProductCode({ code: product.getProductCode() })

    if (findProductCode.message) {
      return {
        statusCode: findProductCode.statusCode,
        message: findProductCode.message
      }
    }

    return await shoppingListRepository.save({
      id_group_user: findGroup.dataValues.id_group_user,
      code: product.getProductCode(),
      quantity: product.getProductQuantity(),
      groupProduct: product.getgroupProduct(),
      productNote: product.getproductNote()
    })
  }

  async function removeProductFromShoppingList ({ itemId, userId }) {
    if (!itemId) return { message: 'You must supply the item id.' }

    if (!(itemId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i))) { return { message: `${itemId} is not a valid UUID` } }

    const findItem = await shoppingListRepository.findById({ shoppingListId: itemId })

    if (!findItem) { return { message: `No item with this id '${itemId}' was found in the shopping list !` } }

    const findItemUser = await shoppingListRepository.findItemOwner({ itemId, userId })

    if (!findItemUser && !findItem.dataValues.groupProduct) { return { statusCode: 403, message: 'Ce produit ne vous appartient pas' } }

    return await shoppingListRepository.removeProduct({ id: itemId })
  }

  async function getGroupShoppingList ({ groupId }) {
    if (!(groupId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i))) { return { message: `${groupId} is not a valid UUID` } }

    const groupInfo = await groupService.getGroup({ groupId })

    if (groupInfo.message) return { message: groupInfo.message }

    const result = []

    const shoppingList = await shoppingListRepository.findGroupShoppingList({ groupId: groupId })

    for (const y of shoppingList) {
      const findUsername = await userService.listOneUser(
        { id: y.dataValues.owners.dataValues.userId })

      result.push(
        {
          id: y.dataValues.id,
          code: y.dataValues.product.dataValues.code,
          product_name: y.dataValues.product.dataValues.product_name,
          quantity: y.dataValues.quantity,
          product_note: y.dataValues.productNote,
          groupProduct: y.dataValues.groupProduct,
          username: findUsername.dataValues.username
        })
    }

    return result
  }

  async function editItemQuantity ({ itemId, userId, quantity }) {
    if (!itemId) return { message: 'You must supply a listProduct id.' }
    if (!quantity) return { message: 'You must supply a quantity.' }

    if (!(itemId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i))) { return { statusCode: 400, message: `${itemId} is not a valid UUID` } }

    const findItem = await shoppingListRepository.findById({ shoppingListId: itemId })

    if (!findItem) return { message: `No item with this id '${itemId}' was found in the shopping list !` }

    const findItemUser = await shoppingListRepository.findItemOwner({ itemId, userId })

    if (!findItemUser) {
      return {
        statusCode: 403,
        message: 'Ce produit ne vous appartient pas'
      }
    }

    if (typeof quantity !== 'number') return { message: 'A product\'s quantity must be a number.' }

    if (quantity < 1 || quantity > 20) return { message: 'A product\'s quantity must be between 1 and 20.' }

    return await shoppingListRepository.updateQuantity({ itemId, quantity })
  }
}
