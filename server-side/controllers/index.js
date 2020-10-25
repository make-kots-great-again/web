import userControllerFactory from './userController';
import groupControllerFactory from './groupController';
import productControllerFactory from './productController';
import shoppingListControllerFactory from './shoppingListController';

const userController = userControllerFactory();
const groupController = groupControllerFactory();
const productController = productControllerFactory();
const shoppingListController = shoppingListControllerFactory();

const controllers = Object.freeze({
    userController, groupController, productController, shoppingListController
});

export default controllers
export {userController, groupController, productController, shoppingListController}
