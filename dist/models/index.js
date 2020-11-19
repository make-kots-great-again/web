"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function () {
    return _groups.Group;
  }
});
Object.defineProperty(exports, "userGroup", {
  enumerable: true,
  get: function () {
    return _userGroups.userGroup;
  }
});
Object.defineProperty(exports, "User", {
  enumerable: true,
  get: function () {
    return _users.User;
  }
});
Object.defineProperty(exports, "Product", {
  enumerable: true,
  get: function () {
    return _products.Product;
  }
});
Object.defineProperty(exports, "ShoppingList", {
  enumerable: true,
  get: function () {
    return _shoppingList.ShoppingList;
  }
});

var _groups = require("./groups");

var _userGroups = require("./userGroups");

var _users = require("./users");

var _products = require("./products");

var _shoppingList = require("./shoppingList");

_users.User.belongsToMany(_groups.Group, {
  through: _userGroups.userGroup,
  foreignKey: 'userId',
  as: 'groups'
});

_groups.Group.belongsToMany(_users.User, {
  through: _userGroups.userGroup,
  foreignKey: 'groupId',
  as: 'users'
});

_products.Product.hasMany(_shoppingList.ShoppingList, {
  foreignKey: 'code',
  as: 'productCode'
});

_shoppingList.ShoppingList.belongsTo(_products.Product, {
  foreignKey: 'code',
  as: 'product'
});

_userGroups.userGroup.hasMany(_shoppingList.ShoppingList, {
  foreignKey: 'id_group_user',
  as: 'idGroupUser'
});

_shoppingList.ShoppingList.belongsTo(_userGroups.userGroup, {
  foreignKey: 'id_group_user',
  as: 'owners'
});