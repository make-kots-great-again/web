"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shoppingListServiceFactory;

var _domain = require("../domain");

var _index = require("./index");

function shoppingListServiceFactory({
  shoppingListRepository
}) {
  return Object.freeze({
    listMyShoppingLists,
    putProductInShoppingList,
    removeProductFromShoppingList,
    getGroupShoppingList
  });

  async function listMyShoppingLists({
    userId
  }) {
    if (!userId) return {
      message: 'You must supply a user id.'
    };
    const findUserGroups = await _index.groupService.listMyGroups({
      userId
    });
    if (findUserGroups.length === 0) return [];
    const {
      groups
    } = findUserGroups[0].dataValues;
    const info = [];

    for (const x of groups) {
      const index = groups.indexOf(x) + 1;
      const shoppingList = await shoppingListRepository.findShoppingList({
        groupId: x.dataValues.groupId
      });
      if (shoppingList.length === 0) info.push({
        message: `No shopping list for this group : ${x.dataValues.groupId}`
      });

      for (const y of shoppingList) {
        const findUsername = await _index.userService.listOneUser({
          id: y.dataValues["owners"].dataValues.userId
        });
        info.push({
          product_name: y.dataValues.product.dataValues.product_name,
          quantity: y.dataValues.quantity,
          code: y.dataValues.product.dataValues.code,
          list: `list ${index}`,
          username: findUsername.dataValues.username
        });
      }
    }

    return info.filter(x => !!x.list).reduce((result, item) => ({ ...result,
      [item['list']]: [...(result[item['list']] || []), item]
    }), {});
  }

  async function putProductInShoppingList({
    groupId,
    userId,
    ...productInfo
  }) {
    if (true) return {
      message: 'You must supply a group id.'
    };
    const findGroup = await _index.groupService.getIdGroupUser({
      groupId: groupId,
      userId: userId
    });
    if (findGroup.message) return {
      message: findGroup.message
    };
    const findUser = await _index.userService.listOneUser({
      id: userId
    });
    const findList = await getGroupShoppingList({
      groupId: groupId
    });
    const existingProduct = findList.find(x => x.code === productInfo.code && x.username === findUser.dataValues.username);
    if (existingProduct) return {
      message: `You have already added ${existingProduct.product_name} to this list !`
    };
    const product = (0, _domain.makeShoppingList)({ ...productInfo
    });
    return await shoppingListRepository.save({
      id_group_user: findGroup.dataValues.id_group_user,
      code: product.getProductCode(),
      quantity: product.getProductQuantity()
    });
  }

  async function removeProductFromShoppingList({
    listId
  }) {
    return await shoppingListRepository.removeProduct({
      id: listId
    });
  }

  async function getGroupShoppingList({
    groupId
  }) {
    const result = [];
    const shoppingList = await shoppingListRepository.findShoppingList({
      groupId: groupId
    });

    for (const y of shoppingList) {
      const findUsername = await _index.userService.listOneUser({
        id: y.dataValues["owners"].dataValues.userId
      });
      result.push({
        product_name: y.dataValues.product.dataValues.product_name,
        quantity: y.dataValues.quantity,
        code: y.dataValues.product.dataValues.code,
        username: findUsername.dataValues.username,
        id: y.dataValues.id
      });
    }

    return result;
  }
}