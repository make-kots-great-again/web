'use strict'
const consola = require('consola')
const { dummyUsers, usernames } = require('../helpers/dummyData')

module.exports = {

  up: (queryInterface, Sequelize) => {
    consola.info({ message: 'Seeding users into the database...', badge: true })
    return queryInterface.bulkInsert('users', dummyUsers, {})
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('users',
      { username: { [Op.in]: [...usernames] } }, {})
  }
}
