"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupController = exports.userController = exports.default = void 0;

var _userController = _interopRequireDefault(require("./userController"));

var _groupController = _interopRequireDefault(require("./groupController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userController = (0, _userController.default)();
exports.userController = userController;
const groupController = (0, _groupController.default)();
exports.groupController = groupController;
const controllers = Object.freeze({
  userController,
  groupController
});
var _default = controllers;
exports.default = _default;