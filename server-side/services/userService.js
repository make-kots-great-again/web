import {makeUser} from '../domain'
import {jwtFactory, passwordFactory} from "../security";

export default function userServiceFactory({userRepository}) {
    return Object.freeze({
        addUser, listUsers, listOneUser, logInUser, removeUser,
        putUser, patchUserPwd, searchUser
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

        const {username, email: userEmail, userId, password: userPassword} = data;

        const validPassword = await passwordFactory.verifyPassword(password, userPassword);

        if (!validPassword) return {message: "Authentication failed !"};

        if (validPassword)
            return {
                token: jwtFactory.generateJwt({username, userEmail, userId}),
                data
            };
    }

    async function listUsers() {
        return userRepository.findAll();
    }

    /**
     * Fonction vérifiant la présence et la validité d'un identifiant avant
     * de forwarder la requête au userRepository.
     * @param id l'identifiant de l'utilisateur.
     * @returns
     *          -> si l'identifiant est manquant ou invalide : un message d'erreur
     *          -> sinon, la réponse de la requête envoyé au userRepository.
     */
    async function listOneUser({id} = {}) {

        if (!id) return {message: 'You must supply an id.'};

        if (!(id.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${id} is not a valid v4 UUID`};

        return userRepository.findById({id});
    }

    /**
     * Fonction vérifiant :
     *      -> la présence et la validité d'un identifiant
     *      -> l'unicité de l'email et du pseudo dans la db
     * avant de forwarder la requête au userRepository.
     * @param id l'identifiant de l'utilisateur.
     * @param userInfo (paramètre spread) contant toutes les infos à modifier de l'utilisateur
     * @returns
     *          -> si l'identifiant est manquant ou non valide
     *             OU si l'email ou le pseudo existent déjà dans la db : un message d'erreur
     *          -> sinon, la réponse de la requête envoyé au userRepository.
     */
    async function putUser({id}, {...userInfo}) {

        if (!id) return {message: 'You must supply an id.'};

        if (!(id.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${id} is not a valid v4 UUID`};

        const existing_users = await userRepository.findByEmailOrUsername({
            email: userInfo.email,
            username: userInfo.username
        });

        for (let user of existing_users) {
            if (user.userId !== id) {
                return {message: "A user with the same email address already exists !"}
            }
            ;
            if (user.userId !== id) {
                return {message: "A user with the same username already exists !"}
            }
            ;
        }

        return await userRepository.put({id}, {...userInfo});
    }

    /**
     * Fonction vérifiant :
     *      -> la présence et la validité d'un identifiant
     *      -> la validité du mot de passe actuel de l'utilisateur
     * avant de forwarder la requête au userRepository.
     * @param id l'identifiant de l'utilisateur.
     * @param userInfo (paramètre spread) contant le mot de passe actuel ainsi que le nouveau
     *                  mot de passe de l'utilisateur.
     * @returns
     *          -> si l'identifiant est manquant ou non valide
     *             OU si le mot de passe actuel n'est pas bon' : un message d'erreur
     *          -> sinon, la réponse de la requête envoyé au userRepository.
     */
    async function patchUserPwd({id}, {...userInfo}) {

        if (!id) return {message: 'You must supply an id.'};

        if (!(id.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${id} is not a valid v4 UUID`};

        const user = await userRepository.findById({id});
        const newPassword = passwordFactory.hashPassword(userInfo.newPassword);
        if (!await passwordFactory.verifyPassword(userInfo.password, user.password)) return {message: `wrong password`};

        return await userRepository.patchPwd({id}, {newPassword});
    }

    async function removeUser({id} = {}) {

        if (!id) return {message: 'You must supply an id.'};

        if (!(id.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${id} is not a valid v4 UUID`};

        return await userRepository.remove({id});
    }

    async function searchUser({username} = {}) {

        if (!username) return {message: 'You must supply an id.'};

        return await userRepository.searchUsername({username});
    }

}
