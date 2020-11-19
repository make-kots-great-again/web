'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      code: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      product_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      brands: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ingredients: {
        type: Sequelize.STRING(500),
        allowNull: true
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
  down: queryInterface => queryInterface.dropTable('products')
};