'use strict';

const consola = require("consola");

const {
  dummyGroups,
  groups
} = require('../helpers/dummyData');

module.exports = {
  up: (queryInterface, Sequelize) => {
    consola.info({
      message: 'Seeding groups into the database...',
      badge: true
    });
    return queryInterface.bulkInsert('groups', dummyGroups, {});
  },
  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('groups', {
      groupName: {
        [Op.in]: [...groups]
      }
    }, {});
  }
};