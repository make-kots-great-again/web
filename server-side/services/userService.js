import {makeUser} from '../domain'
import {jwtFactory, passwordFactory} from "../security";

export default function userServiceFactory({userRepository}) {
    return Object.freeze({
        addUser, listUsers, listOneUser, logInUser, removeUser, putUser, patchUserPwd
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

    async function listOneUser({id} = {}) { 

        if (!id) return {message: 'You must supply an id.'};

        if (!(id.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${id} is not a valid v4 UUID`};

        return await userRepository.findById({id});
    }

    async function putUser({id},{...userInfo}) {

        if (!id) return {message: 'You must supply an id.'};

        if (!(id.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${id} is not a valid v4 UUID`};

        const existing_email = await userRepository.findByEmail({...userInfo});
        const existing_username = await userRepository.findByUsername({...userInfo});

        if (existing_email.length != 0){
            if(existing_email[0].userId != id) return {message: "A user with the same email address already exists !"}
        };
        if (existing_username.length != 0){
            if(existing_username[0].userId != id) return {message: "A user with the same username already exists !"}
        };
        
        return await userRepository.put({id},{...userInfo});
    }

    async function patchUserPwd({id},{...userInfo}) {

        if (!id) return {message: 'You must supply an id.'};

        if (!(id.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${id} is not a valid v4 UUID`};
        
        const user = await userRepository.findById({id});
        const newPassword = passwordFactory.hashPassword(userInfo.newPassword);
        if ( !await passwordFactory.verifyPassword(userInfo.password,user.password)) return {message: `wrong password`};

        return await userRepository.patchPwd({id},{newPassword});
    }

    async function removeUser({id} = {}) {

        if (!id) return {message: 'You must supply an id.'};

        if (!(id.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${id} is not a valid v4 UUID`};

        return awaituserRepository.remove({id});
    }

}
