import buildMakeUser from './user'
import buildMakeGroup from './group'
import buildMakeProduct from './product'
import requiredParam from '../helpers/required-parameter'
import isValidEmail from '../helpers/validate-email'
import {passwordFactory} from '../security'

const makeUser = buildMakeUser(isValidEmail, passwordFactory.hashPassword, requiredParam);
const makeGroup = buildMakeGroup(requiredParam);
const makeProduct = buildMakeProduct(requiredParam);

const entities = Object.freeze({makeUser, makeGroup, makeProduct});

export default entities
export {makeUser, makeGroup, makeProduct}

