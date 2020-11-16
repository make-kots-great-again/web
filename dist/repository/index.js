"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shoppingListRepository = exports.productRepository = exports.groupRepository = exports.userRepository = exports.default = void 0;

var _userRepository = _interopRequireDefault(require("./userRepository"));

var _groupRepository = _interopRequireDefault(require("./groupRepository"));

var _productRepository = _interopRequireDefault(require("./productRepository"));

var _shoppingListRepository = _interopRequireDefault(require("./shoppingListRepository"));

var _sequelize = require("sequelize");

var _models = require("../models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRepository = (0, _userRepository.default)({
  User: _models.User,
  Op: _sequelize.Op
});
exports.userRepository = userRepository;
const groupRepository = (0, _groupRepository.default)({
  Group: _models.Group,
  userGroup: _models.userGroup,
  User: _models.User
});
exports.groupRepository = groupRepository;
const productRepository = (0, _productRepository.default)({
  Product: _models.Product,
  Op: _sequelize.Op
});
exports.productRepository = productRepository;
const shoppingListRepository = (0, _shoppingListRepository.default)({
  ShoppingList: _models.ShoppingList,
  User: _models.User,
  Group: _models.Group,
  userGroup: _models.userGroup,
  Product: _models.Product,
  Op: _sequelize.Op
});
exports.shoppingListRepository = shoppingListRepository;
const repositories = Object.freeze({
  userRepository,
  groupRepository,
  productRepository,
  shoppingListRepository
});
var _default = repositories;
exports.default = _default;