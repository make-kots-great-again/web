'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('shoppingList', {

            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
                isUUID: 4,
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            code: {
                type: Sequelize.INTEGER,
                references: {model: 'products', key: 'code'}
            },
            userId: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                isUUID: 4,
                references: {model: 'userGroups', key: 'userId'},
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            groupId: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                references: {model: 'userGroups', key: 'groupId'},
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
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
    down: queryInterface => queryInterface.dropTable('shoppingList')
};
