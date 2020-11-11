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
                defaultValue: 1,
                validate: {
                    min: 1,
                    max: 20
                }
            },
            code: {
                type: Sequelize.INTEGER,
                references: {model: 'products', key: 'code'}
            },
            groupProduct: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false
            },
            id_group_user: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                isUUID: 4,
                references: {model: 'userGroups', key: 'id_group_user'},
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
