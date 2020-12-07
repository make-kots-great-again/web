'use strict'

const consola = require('consola')
const { shoppingList } = require('../helpers/dummyData')

module.exports = {

  up: (queryInterface, Sequelize) => {
    consola.info({ message: 'Seeding shoppingList into the database...', badge: true })
    return queryInterface.bulkInsert('shoppingList', shoppingList, {})
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('shoppingList', {}, {})
  }
}
