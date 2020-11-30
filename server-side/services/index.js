import userServiceFactory from './userService'
import groupServiceFactory from './groupService'
import productServiceFactory from './productService'
import shoppingListServiceFactory from './shoppingListService'
import reserveServiceFactory from './reserveService'

import {
    userRepository,
    groupRepository,
    productRepository,
    shoppingListRepository,
    reserveRepository
} from '../repository'

const userService = userServiceFactory({userRepository});
const groupService = groupServiceFactory({groupRepository, userRepository});
const productService = productServiceFactory({productRepository});
const reserveService = reserveServiceFactory({reserveRepository, groupRepository, productRepository});
const shoppingListService = shoppingListServiceFactory({shoppingListRepository, productRepository});

const services = Object.freeze({userService, groupService, productService, shoppingListService, reserveService});

export default services
export {userService, groupService, productService, shoppingListService, reserveService}
