"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shoppingListControllerFactory;

var _ = _interopRequireDefault(require("."));

var _services = require("../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shoppingListControllerFactory() {
  return Object.freeze({
    getShoppingList,
    addProductToShoppingList,
    removeProductToShoppingList,
    getGroupShoppingList
  });

  async function getShoppingList(httpRequest) {
    const {
      userId
    } = httpRequest.user;

    try {
      const shoppingList = await _services.shoppingListService.listMyShoppingLists({
        userId
      });
      return {
        statusCode: 200,
        body: {
          success: true,
          shoppingList: shoppingList
        }
      };
    } catch (e) {
      console.log(e);
      return {
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  }

  async function addProductToShoppingList(httpRequest) {
    const {
      userId
    } = httpRequest.user;
    const {
      groupId
    } = httpRequest.params;
    const { ...productInfo
    } = httpRequest.body;

    try {
      const shoppingList = await _services.shoppingListService.putProductInShoppingList({
        groupId,
        userId,
        ...productInfo
      });

      if (shoppingList.message) {
        return {
          statusCode: 404,
          body: {
            success: false,
            message: shoppingList.message
          }
        };
      }

      return {
        statusCode: 200,
        body: {
          success: true,
          message: 'Product successfully added to the list !',
          shoppingList: shoppingList
        }
      };
    } catch (e) {
      console.log(e);
      return {
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  }

  async function removeProductToShoppingList(httpRequest) {
    const {
      listId
    } = httpRequest.params;

    try {
      const shoppingList = await _services.shoppingListService.removeProductFromShoppingList({
        listId
      });

      if (shoppingList.message) {
        return {
          statusCode: 404,
          body: {
            success: false,
            message: shoppingList.message
          }
        };
      }

      return {
        statusCode: 200,
        body: {
          success: true,
          message: 'Product delete from the list !',
          shoppingList: shoppingList
        }
      };
    } catch (e) {
      console.log(e);
      return {
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  }

  async function getGroupShoppingList(httpRequest) {
    const {
      groupId
    } = httpRequest.params;

    try {
      const shoppingList = await _services.shoppingListService.getGroupShoppingList({
        groupId
      });
      return {
        statusCode: 200,
        body: {
          success: true,
          shoppingList: shoppingList
        }
      };
    } catch (e) {
      console.log(e);
      return {
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  }
}

;