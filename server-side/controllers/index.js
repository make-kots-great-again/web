import userControllerFactory from './userController'
import groupControllerFactory from './groupController'

const userController = userControllerFactory();
const groupController = groupControllerFactory();

const controllers = Object.freeze({
    userController, groupController
});

export default controllers
export {userController, groupController}
