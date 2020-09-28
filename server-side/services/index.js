import userServiceFactory from './userService'

import {userRepository} from '../repository'

const userService = userServiceFactory({userRepository});
const services = Object.freeze({userService});

export default services
export {userService}
