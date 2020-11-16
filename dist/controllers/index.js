"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shoppingListController = exports.productController = exports.groupController = exports.userController = exports.default = void 0;

var _userController = _interopRequireDefault(require("./userController"));

var _groupController = _interopRequireDefault(require("./groupController"));

var _productController = _interopRequireDefault(require("./productController"));

var _shoppingListController = _interopRequireDefault(require("./shoppingListController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userController = (0, _userController.default)();
exports.userController = userController;
const groupController = (0, _groupController.default)();
exports.groupController = groupController;
const productController = (0, _productController.default)();
exports.productController = productController;
const shoppingListController = (0, _shoppingListController.default)();
exports.shoppingListController = shoppingListController;
const controllers = Object.freeze({
  userController,
  groupController,
  productController,
  shoppingListController
});
var _default = controllers;
exports.default = _default;