import {Sequelize} from 'sequelize';
import dbConnection from "../config/database";
import {User} from "./users";
import {Group} from "./groups";

const userGroup = dbConnection.define('userGroup', {
    userId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        isUUID: 4,
        references: {model: User, key: 'userId'}
    },
    groupId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {model: Group, key: 'groupId'}
    },
    role: {
        type: Sequelize.ENUM('admin', 'member'),
        defaultValue: 'member',
        allowNull: false
    }
});

export {userGroup};
