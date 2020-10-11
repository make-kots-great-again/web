import {Sequelize} from 'sequelize';
import dbConnection from "../config/database";

const Group = dbConnection.define('group', {
    groupId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        isUUID: 4,
    },
    groupName: {
        type: Sequelize.STRING,
        allowNull: false,
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

export {Group};
