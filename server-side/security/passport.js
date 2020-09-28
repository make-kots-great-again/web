const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
import env from '../config/environment'
import {userRepository} from '../repository';

// to auth the user by JWT strategy
const authenticateUser = passport => {

    // At a minimum, you must pass the `jwtFromRequest` and `secretOrKey` properties
    const opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("JWT");
    opts.secretOrKey = env.JWT_KEY;

    // The JWT payload is passed into the verify callback
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {

        const user = await userRepository.findById({id: jwt_payload.userId});

        if (!user) return done(user, false);

        // here, the JWT is valid and the user is authenticated successfully
        if (user) return done(null, user);
        return done(null, false);
    }));
};

export default authenticateUser;
