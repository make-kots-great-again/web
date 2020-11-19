"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeShoppingList = exports.makeProduct = exports.makeGroup = exports.makeUser = exports.default = void 0;

var _user = _interopRequireDefault(require("./user"));

var _group = _interopRequireDefault(require("./group"));

var _product = _interopRequireDefault(require("./product"));

var _shoppingList = _interopRequireDefault(require("./shoppingList"));

var _requiredParameter = _interopRequireDefault(require("../helpers/required-parameter"));

var _validateEmail = _interopRequireDefault(require("../helpers/validate-email"));

var _security = require("../security");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makeUser = (0, _user.default)(_validateEmail.default, _security.passwordFactory.hashPassword, _requiredParameter.default);
exports.makeUser = makeUser;
const makeGroup = (0, _group.default)(_requiredParameter.default);
exports.makeGroup = makeGroup;
const makeProduct = (0, _product.default)(_requiredParameter.default);
exports.makeProduct = makeProduct;
const makeShoppingList = (0, _shoppingList.default)(_requiredParameter.default);
exports.makeShoppingList = makeShoppingList;
const entities = Object.freeze({
  makeUser,
  makeGroup,
  makeProduct,
  makeShoppingList
});
var _default = entities;
exports.default = _default;