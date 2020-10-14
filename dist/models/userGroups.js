"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userGroup = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

var _users = require("./users");

var _groups = require("./groups");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userGroup = _database.default.define('userGroup', {
  userId: {
    type: _sequelize.Sequelize.UUID,
    defaultValue: _sequelize.Sequelize.UUIDV4,
    isUUID: 4,
    primaryKey: true,
    references: {
      model: _users.User,
      key: 'userId'
    }
  },
  groupId: {
    type: _sequelize.Sequelize.UUID,
    defaultValue: _sequelize.Sequelize.UUIDV4,
    primaryKey: true,
    references: {
      model: _groups.Group,
      key: 'groupId'
    }
  },
  role: {
    type: _sequelize.Sequelize.ENUM('admin', 'member'),
    defaultValue: 'admin',
    allowNull: false
  }
});

exports.userGroup = userGroup;