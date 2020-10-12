'use strict';

const consola = require("consola");
const {dummyUserGroups} = require('../helpers/dummyData');

module.exports = {

    up: (queryInterface, Sequelize) => {
        consola.info({message: 'Seeding userGroups into the database...', badge: true})
        return queryInterface.bulkInsert('userGroups', dummyUserGroups, {});
    },

    down: (queryInterface, Sequelize) => {
        const Op = Sequelize.Op;
        const userIds = dummyUserGroups.map(x => x.userId);
        return queryInterface.bulkDelete('userGroups',
            {userId: {[Op.in]: [...userIds]}}, {})
    }
};
