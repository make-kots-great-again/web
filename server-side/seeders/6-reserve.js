'use strict';

const consola = require("consola");
const {reverse} = require('../helpers/dummyData');

module.exports = {

    up: (queryInterface, Sequelize) => {
        consola.info({message: 'Seeding reverse into the database...', badge: true})
        return queryInterface.bulkInsert('reserve', reverse, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('reverse', {}, {})
    }
};
