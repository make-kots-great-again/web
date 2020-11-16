"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShoppingList = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

var _userGroups = require("./userGroups");

var _products = require("./products");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ShoppingList = _database.default.define('shoppingList', {
  id: {
    type: _sequelize.Sequelize.UUID,
    defaultValue: _sequelize.Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
    isUUID: 4
  },
  quantity: {
    type: _sequelize.Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 1,
      max: 20
    }
  },
  groupProduct: {
    type: _sequelize.Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  id_group_user: {
    type: _sequelize.Sequelize.UUID,
    defaultValue: _sequelize.Sequelize.UUIDV4,
    references: {
      model: _userGroups.userGroup,
      key: 'id_group_user'
    }
  },
  code: {
    type: _sequelize.Sequelize.INTEGER,
    references: {
      model: _products.Product,
      key: 'code'
    }
  }
}, {
  freezeTableName: true
});

exports.ShoppingList = ShoppingList;