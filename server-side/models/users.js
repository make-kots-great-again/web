import Sequelize from 'sequelize';
import startDatabase from "../config/database";

const User = startDatabase.define('user', {

    user_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
},
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
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
    console.log('User Table created');
});

export {User};
