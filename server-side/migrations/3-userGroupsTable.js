'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('userGroups', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
            },
            userId: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                isUUID: 4,
                references: {model: 'users', key: 'userId'},
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            groupId: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                references: {model: 'groups', key: 'groupId'},
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            role: {
                type: Sequelize.ENUM('admin', 'member'),
                defaultValue: 'member',
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            }
        });
    },
    down: queryInterface => queryInterface.dropTable('groups')
};
