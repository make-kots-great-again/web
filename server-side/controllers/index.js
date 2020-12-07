import userControllerFactory from './userController'
import groupControllerFactory from './groupController'
import productControllerFactory from './productController'
import shoppingListControllerFactory from './shoppingListController'
import reserveControllerFactory from './reserveController'

const userController = userControllerFactory()
const groupController = groupControllerFactory()
const productController = productControllerFactory()
const shoppingListController = shoppingListControllerFactory()
const reserveController = reserveControllerFactory()

const controllers = Object.freeze({ userController, groupController, productController, shoppingListController, reserveController })

export default controllers
export { userController, groupController, productController, shoppingListController, reserveController }
