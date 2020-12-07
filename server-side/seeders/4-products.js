'use strict'

const consola = require('consola')
const { products } = require('../helpers/dummyData')

module.exports = {

  up: (queryInterface, Sequelize) => {
    consola.info({ message: 'Seeding products into the database...', badge: true })
    return queryInterface.bulkInsert('products', products, {})
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    const codes = products.map(x => x.code)
    return queryInterface.bulkDelete('products',
      { code: { [Op.in]: [...codes] } }, {})
  }
}
