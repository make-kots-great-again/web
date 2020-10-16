import userControllerFactory from './userController'
import groupControllerFactory from './groupController'
import productControllerFactory from './productController'

const userController = userControllerFactory();
const groupController = groupControllerFactory();
const productController = productControllerFactory();

const controllers = Object.freeze({
    userController, groupController, productController
});

export default controllers
export {userController, groupController, productController}
