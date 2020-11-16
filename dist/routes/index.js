"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _users = require("./users");

var _groups = require("./groups");

var _products = require("./products");

var _shoppingList = require("./shoppingList");

const routes = Object.freeze({
  usersRoutes: _users.usersRoutes,
  groupsRoutes: _groups.groupsRoutes,
  productsRoutes: _products.productsRoutes,
  shoppingListRoutes: _shoppingList.shoppingListRoutes
});
var _default = routes;
exports.default = _default;