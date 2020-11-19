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
  id_group_user: {
    type: _sequelize.Sequelize.UUID,
    defaultValue: _sequelize.Sequelize.UUIDV4,
    isUUID: 4,
    primaryKey: true
  },
  userId: {
    type: _sequelize.Sequelize.UUID,
    defaultValue: _sequelize.Sequelize.UUIDV4,
    isUUID: 4,
    references: {
      model: _users.User,
      key: 'userId'
    }
  },
  groupId: {
    type: _sequelize.Sequelize.UUID,
    defaultValue: _sequelize.Sequelize.UUIDV4,
    references: {
      model: _groups.Group,
      key: 'groupId'
    }
  },
  role: {
    type: _sequelize.Sequelize.ENUM('admin', 'member', 'personal'),
    defaultValue: 'admin',
    allowNull: false
  }
});

exports.userGroup = userGroup;