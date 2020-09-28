import {makeUser} from '../domain'

export default function userServiceFactory({userRepository}) {
    return Object.freeze({
        addUser, listUsers
    });

    async function addUser(userInfo) {

        const user = makeUser({...userInfo});

        return await userRepository.save({
            username: user.getUsername(),
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            email: user.getEmail(),
            password: user.getPassword(),
        });

    }

    async function listUsers() {
        return userRepository.findAll();
    }

}
