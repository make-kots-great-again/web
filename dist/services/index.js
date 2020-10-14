"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupService = exports.userService = exports.default = void 0;

var _userService = _interopRequireDefault(require("./userService"));

var _groupService = _interopRequireDefault(require("./groupService"));

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
const services = Object.freeze({
  userService,
  groupService
});
var _default = services;
exports.default = _default;