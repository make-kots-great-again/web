"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shoppingListService = exports.productService = exports.groupService = exports.userService = exports.default = void 0;

var _userService = _interopRequireDefault(require("./userService"));

var _groupService = _interopRequireDefault(require("./groupService"));

var _productService = _interopRequireDefault(require("./productService"));

var _shoppingListService = _interopRequireDefault(require("./shoppingListService"));

var _repository = require("../repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userService = (0, _userService.default)({
  userRepository: _repository.userRepository
});
exports.userService = userService;
const groupService = (0, _groupService.default)({
  groupRepository: _repository.groupRepository,
  userRepository: _repository.userRepository
});
exports.groupService = groupService;
const productService = (0, _productService.default)({
  productRepository: _repository.productRepository
});
exports.productService = productService;
const shoppingListService = (0, _shoppingListService.default)({
  shoppingListRepository: _repository.shoppingListRepository
});
exports.shoppingListService = shoppingListService;
const services = Object.freeze({
  userService,
  groupService,
  productService,
  shoppingListService
});
var _default = services;
exports.default = _default;