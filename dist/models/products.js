"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Product = _database.default.define('product', {
  code: {
    type: _sequelize.Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  product_name: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  brands: {
    type: _sequelize.Sequelize.STRING,
    allowNull: true
  },
  ingredients: {
    type: _sequelize.Sequelize.STRING(500),
    allowNull: true
  }
});

exports.Product = Product;