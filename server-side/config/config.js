
const env = Object.freeze({...process.env});

module.exports = {
    dev: {
        dialect: 'postgres',
        username: env.DATABASE_USER,
        password: env.DATABASE_PASSWORD,
        database: env.DATABASE,
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
    prod: {
        username: '', password: '',
        database: '', host: '',
        port: '', dialect: '',
    }
};
