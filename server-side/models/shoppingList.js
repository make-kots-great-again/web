import {Sequelize} from 'sequelize';
import dbConnection from "../config/database";
import userGroup from "./userGroups";
import Product from "./products";
import Group from "./groups";

const ShoppingList = dbConnection.define('shoppingList', {

        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
            isUUID: 4,
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                min: 1,
                max: 20
            }
        },
        groupProduct: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        id_group_user: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            references: {model: userGroup, key: 'id_group_user'}
        },
        code: {
            type: Sequelize.BIGINT                      ,
            references: {model: Product, key: 'code'}
        }
    },
    {
        freezeTableName: true
    });

export default ShoppingList;
