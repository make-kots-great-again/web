"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Group = _database.default.define('group', {
  groupId: {
    type: _sequelize.Sequelize.UUID,
    defaultValue: _sequelize.Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
    isUUID: 4
  },
  groupName: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  groupDescription: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [4, 280]
    }
  },
  createdAt: {
    allowNull: false,
    type: _sequelize.Sequelize.DATE,
    defaultValue: new Date()
  },
  updatedAt: {
    allowNull: false,
    type: _sequelize.Sequelize.DATE,
    defaultValue: new Date()
  }
});

exports.Group = Group;