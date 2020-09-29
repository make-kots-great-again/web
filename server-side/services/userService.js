import {makeUser} from '../domain'
import {jwtFactory, passwordFactory} from "../security";

export default function userServiceFactory({userRepository}) {
    return Object.freeze({
        addUser, listUsers, logInUser
    });

    async function addUser({...userInfo}) {

        const user = makeUser({...userInfo});

        const existing = await userRepository.findByEmailOrUsername({...userInfo});

        if (existing.length !== 0) return {message: "A user with the same username or email already exists !"};

        return await userRepository.save({
            username: user.getUsername(),
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            email: user.getEmail(),
            password: user.getPassword(),
        });

    }

    async function logInUser({pseudo, password} = {}) {

        if (!pseudo) return {message: 'You must supply a pseudo.'};
        if (!password) return {message: 'You must supply a password.'};

        const existing = await userRepository.findPseudo({pseudo});

        if (existing.length === 0) return {message: "Authentication failed !"};

        const {dataValues: data} = existing["0"];

        const {email: userEmail, userId: id, password: userPassword} = data;

        const validPassword = await passwordFactory.verifyPassword(password, userPassword);

        if (!validPassword) return {message: "Authentication failed !"};

        if (validPassword)
            return {token: jwtFactory.generateJwt({userEmail, id}), data};
    }

    async function listUsers() {
        return userRepository.findAll();
    }

}
