import buildMakeUser from './user'
import buildMakeGroup from './group'
import buildMakeProduct from './product'
import buildMakeShoppingList from './shoppingList'
import buildMakeReserve from './reserve'
import requiredParam from '../helpers/required-parameter'
import isValidEmail from '../helpers/validate-email'
import { passwordFactory } from '../security'

const makeUser = buildMakeUser(isValidEmail, passwordFactory.hashPassword, requiredParam)
const makeGroup = buildMakeGroup(requiredParam)
const makeProduct = buildMakeProduct(requiredParam)
const makeShoppingList = buildMakeShoppingList(requiredParam)
const makeReserve = buildMakeReserve(requiredParam)

const entities = Object.freeze({ makeUser, makeGroup, makeProduct, makeShoppingList, makeReserve })

export default entities
export { makeUser, makeGroup, makeProduct, makeShoppingList, makeReserve }
