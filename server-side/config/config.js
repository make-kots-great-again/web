
const env = Object.freeze({...process.env});

module.exports = {
    dev: {
        dialect: 'postgres',
        username: env.POSTGRES_USER,
        password: env.POSTGRES_PASSWORD,
        database: env.POSTGRES_DB,
        host: env.POSTGRES_HOST,
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
