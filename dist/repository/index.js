"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupRepository = exports.userRepository = exports.default = void 0;

var _userRepository = _interopRequireDefault(require("./userRepository"));

var _groupRepository = _interopRequireDefault(require("./groupRepository"));

var _sequelize = require("sequelize");

var _models = require("../models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {Group} from '../models/groups'
//import {userGroup} from '../models/userGroups'
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
const repositories = Object.freeze({
  userRepository,
  groupRepository
});
var _default = repositories;
exports.default = _default;