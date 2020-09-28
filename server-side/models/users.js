import Sequelize from 'sequelize';
import startDatabase from "../config/database";

const User = startDatabase.define('users', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

User.sync().then(() => {
    console.log('table created');
});
export {User};
