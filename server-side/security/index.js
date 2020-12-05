import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'

import makePasswordFactory from './password'
import authenticateUser from './passport'
import makeJwtFactory from './jwt'

const passwordFactory = makePasswordFactory({ bcrypt })
const jwtFactory = makeJwtFactory({ jwt })

export { passwordFactory, authenticateUser, jwtFactory }
