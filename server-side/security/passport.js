import env from '../config/environment'
import { groupService, userService } from '../services'
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

// to auth the user or group by JWT strategy
const authenticateUser = passport => {
  // At a minimum, you must pass the `jwtFromRequest` and `secretOrKey` properties
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: env.JWT_KEY
  }

  // The JWT payload is passed into the verify callback
  passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    let obj = null

    if (jwt_payload.userId) {
      obj = await userService.listOneUser({ id: jwt_payload.userId })
    }
    if (jwt_payload.groupBarCode) {
      obj = await groupService.getGroupByBarCode({ groupBarCode: jwt_payload.groupBarCode })
    }

    if (!obj) return done(obj, false)

    // here, the JWT is valid and the user or group is authenticated successfully
    if (obj) return done(null, obj)
    return done(null, false)
  }))
}

export default authenticateUser
