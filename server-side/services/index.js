import userServiceFactory from './userService'
import groupServiceFactory from './groupService'
import productServiceFactory from './productService'

import {userRepository, groupRepository, productRepository} from '../repository'

const userService = userServiceFactory({userRepository});
const groupService = groupServiceFactory({groupRepository, userRepository});
const productService = productServiceFactory({productRepository});

const services = Object.freeze({userService, groupService, productService});

export default services
export {userService, groupService, productService}
