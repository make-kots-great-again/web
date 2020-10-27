import env from "../config/environment";

export default function makeJwtFactory({jwt}) {
    return Object.freeze({
        generateJwt
    });

    function generateJwt({username, userEmail, userId} = {}) {
        return "JWT " + jwt.sign({username: username, userEmail: userEmail, userId: userId},
            env.JWT_KEY, {expiresIn: "7d"});
    }
}
