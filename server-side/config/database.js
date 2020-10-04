import Sequelize from 'sequelize';
import env from "./environment";

const dbConnection = new Sequelize(
    env.POSTGRES_DB,
    env.POSTGRES_USER,
    env.POSTGRES_PASSWORD, {
        host: env.POSTGRES_HOST,
        dialect: 'postgres',
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    });

export default dbConnection;
