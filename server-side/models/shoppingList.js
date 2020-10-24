import {Sequelize} from 'sequelize';
import dbConnection from "../config/database";
import {userGroup} from "./userGroups";
import {Product} from "./products";

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
        },
        id_group_user: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            references: {model: userGroup, key: 'id_group_user'}
        },
        code: {
            type: Sequelize.INTEGER,
            references: {model: Product, key: 'code'}
        }
    },
    {
        freezeTableName: true
    });

export {ShoppingList};
