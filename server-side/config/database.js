import Sequelize from 'sequelize';
import env from "./environment";

let dbConnection = "";

if (env.NODE_ENV === 'test2') {
    dbConnection = new SequelizeMock();
} else if (env.NODE_ENV === 'dev' || env.NODE_ENV === 'test') {
    console.log(env.NODE_ENV);
    dbConnection = new Sequelize(
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
        }
    );
} else if (env.NODE_ENV === 'production') {

    dbConnection = new Sequelize(env.DATABASE_URL, {
        ssl: true,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });
}

export default dbConnection;
