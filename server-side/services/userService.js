import {makeUser} from '../domain'

export default function userServiceFactory({userRepository}) {
    return Object.freeze({
        addUser, listUsers
    });

    async function addUser(userInfo) {

        const user = makeUser({...userInfo});

      const createdUser = await userRepository.save({
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
        });

      console.log("mmmmmmmmmmmmmmmmmmmm")
      console.log(createdUser)
        console.log("mmmmmmmmmmmmmmmmmmmm")
        return createdUser;

    }

    async function listUsers() {
        return userRepository.findAll();
    }

}
