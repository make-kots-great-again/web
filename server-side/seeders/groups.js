'use strict';
const consola = require("consola");
const {v4: uuidv4} = require('uuid');

const dummyGroup = [{
    groupId: uuidv4(),
    groupName: "daniel"
}, {
    groupId: uuidv4(),
    groupName: "louis"
}];

module.exports = {
    up: (queryInterface, Sequelize) => {
        consola.info({message: 'Seeding groups into the database...', badge: true})
        return queryInterface.bulkInsert('groups', dummyGroup, {});
    },

    down: (queryInterface, Sequelize) => {
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete('groups',
            {groupName: {[Op.in]: [...dummyGroup]}}, {})
    }
};
