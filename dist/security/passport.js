"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _environment = _interopRequireDefault(require("../config/environment"));

var _repository = require("../repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const JwtStrategy = require('passport-jwt').Strategy;

const ExtractJwt = require('passport-jwt').ExtractJwt;

// to auth the user by JWT strategy
const authenticateUser = passport => {
  // At a minimum, you must pass the `jwtFromRequest` and `secretOrKey` properties
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: _environment.default.JWT_KEY
  }; // The JWT payload is passed into the verify callback

  passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    const user = await _repository.userRepository.findById({
      id: jwt_payload.userId
    });
    if (!user) return done(user, false); // here, the JWT is valid and the user is authenticated successfully

    if (user) return done(null, user);
    return done(null, false);
  }));
};

var _default = authenticateUser;
exports.default = _default;