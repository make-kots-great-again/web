import userServiceFactory from './userService'
import groupServiceFactory from './groupService'

import {userRepository, groupRepository} from '../repository'

const userService = userServiceFactory({userRepository});
const groupService = groupServiceFactory({groupRepository, userRepository});
const services = Object.freeze({userService, groupService});

export default services
export {userService, groupService}
