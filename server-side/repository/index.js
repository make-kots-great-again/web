import makeUserRepository from './userRepository'
import makeGroupRepository from './groupRepository'
import makeProductRepository from './productRepository'
import makeshoppingListRepository from './shoppingListRepository'
import makeReserveRepository from './reserveRepository'
import { Op } from 'sequelize'
import { User, Group, userGroup, Product, ShoppingList, Reserve } from '../models'

const userRepository = makeUserRepository({ User, Op })
const groupRepository = makeGroupRepository({ Group, userGroup, User, Op })
const productRepository = makeProductRepository({ Product, Op })
const reserveRepository = makeReserveRepository({ Reserve, Product, Group, Op })
const shoppingListRepository = makeshoppingListRepository({ ShoppingList, User, Group, userGroup, Product })

const repositories = Object.freeze({ userRepository, groupRepository, productRepository, shoppingListRepository, reserveRepository })

export default repositories
export { userRepository, groupRepository, productRepository, shoppingListRepository, reserveRepository }
