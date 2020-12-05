import controllers from '.'
import { shoppingListService } from '../services'

export default function shoppingListControllerFactory () {
  return Object.freeze({
    getShoppingList,
    addProductToShoppingList,
    removeProductToShoppingList,
    getGroupShoppingList,
    updateItemQuantity
  })

  async function getShoppingList (httpRequest) {
    const { userId } = httpRequest.user

    try {
      const shoppingList = await shoppingListService.listMyShoppingLists({ userId })

      return {
        statusCode: 200,
        body: {
          success: true,
          shoppingList: shoppingList
        }
      }
    } catch (e) {
      console.log(e)
      return { statusCode: 400, body: { error: e.message } }
    }
  }

  async function addProductToShoppingList (httpRequest) {
    const { userId } = httpRequest.user
    const { groupId } = httpRequest.params
    const { ...productInfo } = httpRequest.body

    try {
      const shoppingList = await shoppingListService
        .putProductInShoppingList({ groupId, userId, ...productInfo })

      if (shoppingList.message) {
        return {
          statusCode: (shoppingList.statusCode) ? shoppingList.statusCode : 404,
          body: { success: false, message: shoppingList.message }
        }
      }

      return {
        statusCode: 200,
        body: {
          success: true,
          message: 'Product successfully added to the list !',
          shoppingList: shoppingList
        }
      }
    } catch (e) {
      console.log(e)
      return { statusCode: 400, body: { error: e.message } }
    }
  }

  async function removeProductToShoppingList (httpRequest) {
    const { itemId } = httpRequest.params
    const { userId } = httpRequest.user

    try {
      const shoppingList = await shoppingListService
        .removeProductFromShoppingList({ itemId, userId })

      if (shoppingList.message) {
        return {
          statusCode: (shoppingList.statusCode) ? shoppingList.statusCode : 404,
          body: { success: false, message: shoppingList.message }
        }
      }

      return {
        statusCode: 200,
        body: {
          success: true,
          message: 'Product delete from the list !',
          shoppingList: shoppingList
        }
      }
    } catch (e) {
      console.log(e)
      return { statusCode: 400, body: { error: e.message } }
    }
  }

  async function getGroupShoppingList (httpRequest) {
    const { groupId } = httpRequest.params

    try {
      const shoppingList = await shoppingListService.getGroupShoppingList({ groupId })

      if (shoppingList.message) {
        return {
          statusCode: 400,
          body: { success: false, message: shoppingList.message }
        }
      }

      return {
        statusCode: 200,
        body: {
          success: true,
          shoppingList: shoppingList
        }
      }
    } catch (e) {
      console.log(e)
      return { statusCode: 400, body: { error: e.message } }
    }
  }

  async function updateItemQuantity (httpRequest) {
    const { itemId } = httpRequest.params
    const { userId } = httpRequest.user
    const { quantity } = httpRequest.body

    try {
      const updatedShoppingList = await shoppingListService.editItemQuantity({ itemId, userId, quantity })

      if (updatedShoppingList.message) {
        return {
          statusCode: (updatedShoppingList.statusCode) ? updatedShoppingList.statusCode : 404,
          body: { success: false, message: updatedShoppingList.message }
        }
      }

      return {
        statusCode: 200,
        body: {
          success: true,
          message: 'Item\'s quantity was successfully updated !'
        }
      }
    } catch (e) {
      console.log(e)
      return { statusCode: 400, body: { error: e.message } }
    }
  }
};
