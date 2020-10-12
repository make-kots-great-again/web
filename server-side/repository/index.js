import makeUserRepository from './userRepository'
import makeGroupRepository from './groupRepository'
import {Op} from 'sequelize';
import {User} from '../models/users'
import {Group} from '../models/groups'
import {userGroup} from '../models/userGroups'

const userRepository = makeUserRepository({User, Op});
const groupRepository = makeGroupRepository({Group, userGroup});

const repositories = Object.freeze({userRepository, groupRepository});

export default repositories
export {userRepository, groupRepository}

