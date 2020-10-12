import {Sequelize} from 'sequelize';
import dbConnection from "../config/database";
import {userGroup} from "./userGroups";
import {Group} from "./groups";

const User = dbConnection.define('user', {

    userId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        isUUID: 4,
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {len: [4, 32]}
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {len: [2, 32]}
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {len: [2, 32]}
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        isEmail: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
    }
});

// User.belongsToMany(Group, {through: userGroup, foreignKey: 'userId'});

 User.associate = (models) => {User.belongsTo(models.Group,
     {through: userGroup, foreignKey: 'userId'})};

export {User};
