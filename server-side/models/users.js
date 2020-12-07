import { Sequelize } from 'sequelize'
import dbConnection from '../config/database'

const User = dbConnection.define('user', {

  userId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
    isUUID: 4
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: { len: [4, 32] }
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { len: [2, 32] }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { len: [2, 32] }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    isEmail: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  }
})

// User.associate = (models) => {User.belongsToMany(models.Group, {through: userGroup, foreignKey: 'userId', as: 'groups'})};

export default User
