'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userGroups', {

      id_group_user: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        isUUID: 4,
        primaryKey: true,
        unique: true
      },
      userId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        isUUID: 4,
        unique: 'uniqueUserGroup',
        references: { model: 'users', key: 'userId' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      groupId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: 'uniqueUserGroup',
        references: { model: 'groups', key: 'groupId' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      role: {
        type: Sequelize.ENUM('admin', 'member', 'personal'),
        defaultValue: 'member',
        allowNull: false
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
    },
    {
      uniqueKeys: {
        uniqueUserGroup: {
          name: 'uniqueUserGroup',
          unique: true,
          fields: ['userId', 'groupId']
        }
      }
    })
  },
  down: queryInterface => queryInterface.dropTable('groups')
}

/*
    up: (queryInterface, Sequelize) => {
        return queryInterface.addConstraint('userGroups', {
            fields: ['userId', 'groupId'],
            type: 'unique',
            name: 'uniqueUserGroup'
        })
    },
    down: queryInterface => queryInterface.removeConstraint('userGroups',
        'uniqueUserGroup')
 */
