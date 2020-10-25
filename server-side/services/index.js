import userServiceFactory from './userService'
import groupServiceFactory from './groupService'
import productServiceFactory from './productService'
import shoppingListServiceFactory from './shoppingListService'

import {userRepository, groupRepository,
    productRepository, shoppingListRepository} from '../repository'

const userService = userServiceFactory({userRepository});
const groupService = groupServiceFactory({groupRepository, userRepository});
const productService = productServiceFactory({productRepository});
const shoppingListService = shoppingListServiceFactory({shoppingListRepository});

const services = Object.freeze(
    {userService, groupService, productService, shoppingListService});

export default services
export {userService, groupService, productService, shoppingListService}
