import userControllerFactory from './userController'

const userController = userControllerFactory();

const controllers = Object.freeze({
    userController});

export default controllers
export {userController}
