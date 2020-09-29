import {Sequelize, Op} from 'sequelize';
import startDatabase from "../config/database";
import consola from "consola";

const User = startDatabase.define('user', {

    userId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
},
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: { len: [4,32] }
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { len: [2,32] }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { len: [2,32] }
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.sync().then(() => {
    consola.success(
        {message: `User Table created !`, badge: true})
});

export {User, Op};
