'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    })
  },
  down: queryInterface => queryInterface.dropTable('users')
}
