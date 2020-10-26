import {Sequelize} from 'sequelize';
import dbConnection from "../config/database";
import {User} from "./users";
import {Group} from "./groups";

const userGroup = dbConnection.define('userGroup', {

    id_group_user: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        isUUID: 4,
        primaryKey: true,
    },
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
        type: Sequelize.ENUM('admin', 'member', 'personal'),
        defaultValue: 'admin',
        allowNull: false
    }
});

export {userGroup};
