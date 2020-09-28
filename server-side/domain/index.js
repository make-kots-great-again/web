import buildMakeUser from './user'
import requiredParam from '../helpers/required-parameter'
import isValidEmail from '../helpers/validate-email'
import {passwordFactory} from '../security'

const makeUser = buildMakeUser(isValidEmail, passwordFactory.hashPassword, requiredParam);
const entities = Object.freeze({makeUser});

export default entities
export {makeUser}

