import makeUserRepository from './userRepository'
import makeGroupRepository from './groupRepository'
import makeProductRepository from './productRepository'
import {Op} from 'sequelize';
import {User, Group, userGroup, Product} from '../models';

const userRepository = makeUserRepository({User, Op});
const groupRepository = makeGroupRepository({Group, userGroup, User});
const productRepository = makeProductRepository({Product, Op});

const repositories = Object.freeze({userRepository, groupRepository, productRepository});

export default repositories
export {userRepository, groupRepository, productRepository}

