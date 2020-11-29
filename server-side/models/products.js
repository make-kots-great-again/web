import {Sequelize} from 'sequelize';
import dbConnection from "../config/database";

const Product = dbConnection.define('product', {

    code: {
        type: Sequelize.BIGINT                      ,
        allowNull: false,
        primaryKey: true,
    },
    product_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    brands: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    ingredients: {
        type: Sequelize.STRING(500),
        allowNull: true,
    }
});

export default Product;
