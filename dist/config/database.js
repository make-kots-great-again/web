"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _environment = _interopRequireDefault(require("./environment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dbConnection = new _sequelize.default(_environment.default.POSTGRES_DB, _environment.default.POSTGRES_USER, _environment.default.POSTGRES_PASSWORD, {
  host: _environment.default.POSTGRES_HOST,
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
var _default = dbConnection;
exports.default = _default;