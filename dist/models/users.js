"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const User = _database.default.define('user', {
  userId: {
    type: _sequelize.Sequelize.UUID,
    defaultValue: _sequelize.Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
    isUUID: 4
  },
  username: {
    type: _sequelize.Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: [4, 32]
    }
  },
  firstName: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [2, 32]
    }
  },
  lastName: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [2, 32]
    }
  },
  email: {
    type: _sequelize.Sequelize.STRING,
    unique: true,
    allowNull: false,
    isEmail: true
  },
  password: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  }
}); // User.associate = (models) => {User.belongsToMany(models.Group, {through: userGroup, foreignKey: 'userId', as: 'groups'})};


exports.User = User;