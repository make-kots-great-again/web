import makeUserRepository from './userRepository';
import makeGroupRepository from './groupRepository';
import makeProductRepository from './productRepository';
import makeshoppingListRepository from './shoppingListRepository';
import {Op} from 'sequelize';
import {User, Group, userGroup, Product, ShoppingList} from '../models';

const userRepository = makeUserRepository({User, Op});
const groupRepository = makeGroupRepository({Group, userGroup, User});
const productRepository = makeProductRepository({Product, Op});
const shoppingListRepository =
    makeshoppingListRepository({ShoppingList, User, Group, userGroup, Product, Op});

const repositories = Object.freeze(
    {userRepository, groupRepository, productRepository, shoppingListRepository});

export default repositories
export {userRepository, groupRepository, productRepository, shoppingListRepository}

