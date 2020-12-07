import { Sequelize } from 'sequelize'
import dbConnection from '../config/database'
import Product from './products'
import Group from './groups'

const Reserve = dbConnection.define('reserve', {

  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
    isUUID: 4
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: { min: 1, max: 20 }
  },
  groupId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    references: { model: Group, key: 'groupId' }
  },
  code: {
    type: Sequelize.BIGINT,
    references: { model: Product, key: 'code' }
  },
  expiringIn: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  valid: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
},
{
  freezeTableName: true
})

export default Reserve
