import Sequelize from 'sequelize';
import env from "./environment";

const startDatabase = new Sequelize(
    env.DATABASE,
    env.DATABASE_USER,
    env.DATABASE_PASSWORD, {
        host: 'localhost',
        dialect: 'postgres',
        logging: true,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    });

export default startDatabase;
