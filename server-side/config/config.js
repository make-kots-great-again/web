require('dotenv/config');

module.exports = {
    development: {
        dialect: 'postgres',
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
        host: 'localhost',
        port: 5432,
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    test: {
        username: '', password: '',
        database: '', host: '',
        port: '', dialect: '',
    },
    production: {
        username: '', password: '',
        database: '', host: '',
        port: '', dialect: '',
    }
};
