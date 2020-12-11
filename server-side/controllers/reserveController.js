import { reserveService } from '../services'

export default function reserveControllerFactory () {
  return Object.freeze({
    getGroupReserveItems, postProductInReserve, patchValidityOfAnItem, patchQuantityOfAnItem, patchQuantityAndDayOfAnItem, removeItemFromReserve
  })

  async function getGroupReserveItems (httpRequest) {
    const { groupId } = httpRequest.params

    try {
      const reserve = await reserveService.listGroupReserveItems({ groupId })

      if (reserve.message) {
        return {
          statusCode: (reserve.statusCode) ? reserve.statusCode : 404,
          body: { success: false, message: reserve.message }
        }
      }

      return {
        statusCode: 200,
        body: {
          success: true,
          reserveItems: reserve
        }
      }
    } catch (e) {
      console.log(e)
      return { statusCode: 400, body: { error: e.message } }
    }
  }

  async function postProductInReserve (httpRequest) {
    const { groupIdBarcode } = httpRequest.params
    const { ...reserveInfo } = httpRequest.body

    try {
      const reserve = await reserveService.addProductInReserve({ groupIdBarcode, ...reserveInfo })

      if (reserve.message) {
        return {
          statusCode: (reserve.statusCode) ? reserve.statusCode : 404,
          body: { success: false, message: reserve.message }
        }
      }

      return {
        statusCode: 200,
        body: {
          success: true,
          reserveItem: [reserve]
        }
      }
    } catch (e) {
      console.log(e)
      return { statusCode: 400, body: { error: e.message } }
    }
  }

  async function patchValidityOfAnItem (httpRequest) {
    const { ...validityInfo } = httpRequest.body

    console.log(validityInfo)

    try {
      const validatedItem = await reserveService
        .patchValidityOfAnItem(validityInfo)

      if (validatedItem.message) {
        return {
          statusCode: (validatedItem.statusCode) ? deleteItem.statusCode : 404,
          body: { success: false, message: validatedItem.message }
        }
      }

      return {
        statusCode: 200,
        body: {
          success: true,
          message: 'validity of the Item was changed',
          validatedItem: validatedItem
        }
      }
    } catch (e) {
      console.log(e)
      return { statusCode: 400, body: { error: e.message } }
    }
  }

  async function patchQuantityOfAnItem (httpRequest) {
    const { ...quantityInfo } = httpRequest.body

    try {
      const changedItem = await reserveService
        .patchQuantityOfAnItem(quantityInfo)

      if (changedItem.message) {
        return {
          statusCode: (changedItem.statusCode) ? changedItem.statusCode : 404,
          body: { success: false, message: changedItem.message }
        }
      }

      return {
        statusCode: 200,
        body: {
          success: true,
          message: 'quantity of the Item was updated',
          changedItem: changedItem
        }
      }
    } catch (e) {
      console.log(e)
      return { statusCode: 400, body: { error: e.message } }
    }
  }

  async function patchQuantityAndDayOfAnItem (httpRequest) {
    const { ...quantityDayInfo } = httpRequest.body

    try {
      const changedItem = await reserveService
        .patchQuantityAndDayOfAnItem(quantityDayInfo)

      if (changedItem.message) {
        return {
          statusCode: (changedItem.statusCode) ? changedItem.statusCode : 404,
          body: { success: false, message: changedItem.message }
        }
      }
      if (changedItem.toDeleted){
        
        const deletedOldItem = await reserveService.removeItemFromReserve(quantityDayInfo.itemId);

        if (deletedOldItem.message) {
          return {
            statusCode: (deletedOldItem.statusCode) ? deletedOldItem.statusCode : 404,
            body: { success: false, message: deletedOldItem.message }
          }
        }
        
        return {
          statusCode: 200,
          body: {
            success: true,
            message: 'quantity and expiration duration of the Item was updated',
            changedItem: changedItem.item,
            deletedOldItem:  deletedOldItem
          }
        } 
      }

      return {
        statusCode: 200,
        body: {
          success: true,
          message: 'quantity and expiration duration of the Item was updated',
          changedItem: changedItem,
        }
      }
    } catch (e) {
      console.log(e)
      return { statusCode: 400, body: { error: e.message } }
    }
  }

  async function removeItemFromReserve (httpRequest) {
    const { itemId } = httpRequest.params

    try {
      const deleteItem = await reserveService.removeItemFromReserve(itemId)

      if (deleteItem.message) {
        return {
          statusCode: (deleteItem.statusCode) ? deleteItem.statusCode : 404,
          body: { success: false, message: deleteItem.message }
        }
      }

      return {
        statusCode: 200,
        body: {
          success: true,
          message: 'Item deleted from reserve',
          deleteItem: deleteItem
        }
      }
    } catch (e) {
      console.log(e)
      return { statusCode: 400, body: { error: e.message } }
    }
  }
};
