import buildMakeUser from './user'
import buildMakeGroup from './group'
import requiredParam from '../helpers/required-parameter'
import isValidEmail from '../helpers/validate-email'
import {passwordFactory} from '../security'

const makeUser = buildMakeUser(isValidEmail, passwordFactory.hashPassword, requiredParam);
const makeGroup = buildMakeGroup(requiredParam);

const entities = Object.freeze({makeUser, makeGroup});

export default entities
export {makeUser, makeGroup}

