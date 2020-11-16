'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('groups', {
      groupId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        isUUID: 4
      },
      groupName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      groupDescription: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [4, 280]
        }
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
    });
  },
  down: queryInterface => queryInterface.dropTable('groups')
};