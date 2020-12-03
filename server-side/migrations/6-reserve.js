'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('reserve', {
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
                validate: {min: 1, max: 20}
            },
            groupId: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                references: {model: 'groups', key: 'groupId'},
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            code: {
                type: Sequelize.BIGINT                      ,
                references: {model: 'products', key: 'code'},
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            valid: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false
            },
            expiringIn: {
                type: Sequelize.INTEGER,
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
    down: queryInterface => queryInterface.dropTable('reserve')
};
