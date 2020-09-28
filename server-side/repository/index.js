import makeUserRepository from './userRepository'
import {User} from '../models/users'

const userRepository = makeUserRepository({User});

const repositories = Object.freeze({userRepository});

export default repositories
export {userRepository}

