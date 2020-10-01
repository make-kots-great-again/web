'use strict';
const {dummyUsers, usernames} = require('../helpers/dummyUsers');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', dummyUsers, {});
    },

    down: (queryInterface, Sequelize) => {
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete('users',
            {username: {[Op.in]: [...usernames]}}, {})
    }
};
