import makeUserRepository from './userRepository'
import {User, Op} from '../models/users'

const userRepository = makeUserRepository({User, Op});

const repositories = Object.freeze({userRepository});

export default repositories
export {userRepository}

