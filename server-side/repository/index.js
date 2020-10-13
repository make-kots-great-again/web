import makeUserRepository from './userRepository'
import makeGroupRepository from './groupRepository'
import {Op} from 'sequelize';
import {User, Group, userGroup} from '../models'
// import {Group} from '../models/groups'
//import {userGroup} from '../models/userGroups'

const userRepository = makeUserRepository({User, Op});
const groupRepository = makeGroupRepository({Group, userGroup, User});

const repositories = Object.freeze({userRepository, groupRepository});

export default repositories
export {userRepository, groupRepository}

