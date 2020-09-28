import env from "../config/environment";

export default function makeJwtFactory({jwt}) {
    return Object.freeze({
        generateJwt
    });

    function generateJwt({userEmail, id} = {}) {
        return "JWT " + jwt.sign({email: userEmail, userId: id},
            env.JWT_KEY, {expiresIn: "1h"});
    }
}
