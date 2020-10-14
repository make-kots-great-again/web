import { userService } from "../services";
export default function userControllerFactory() {
    return Object.freeze({
        registerUser, getAllUsers, getOneUser, logInUser, deleteUser, putOneUser, patchUserPwd
    });

    async function registerUser(httpRequest) {

        try {
            const { ...userInfo } = httpRequest.body;

            const createdUser = await userService.addUser({ ...userInfo });

            if (createdUser.message) {
                return { statusCode: 409, body: { success: false, ...createdUser, } }
            }

            return {
                statusCode: 201,
                body: {
                    success: true,
                    message: "User has been created successfully",
                    user: createdUser
                }
            }
        } catch (e) {

            console.log(e);
            return { statusCode: 400, body: { error: e.message } }
        }

    }

    async function logInUser(httpRequest) {

        try {
            const { pseudo, password } = httpRequest.body;

            const user = await userService.logInUser({ pseudo, password });

            if (user.message) {
                return { statusCode: 401, body: { success: false, ...user } };
            }

            const { username, email, userId: id } = user.data;

            return {
                statusCode: 200,
                body: {
                    success: true,
                    user: {
                        userId: id, username: username,
                        userEmail: email, token: user.token
                    }
                }
            }

        } catch (e) {

            console.log(e);

            return { statusCode: 400, body: { error: e.message } }
        }
    }

    async function getAllUsers() {

        try {
            const users = await userService.listUsers();
            return {
                statusCode: 200,
                body: [...users]
            }
        } catch (e) {

            console.log(e);
            return { statusCode: 400, body: { error: e.message } }
        }
    }

    /**
     * Fonction de contrôle pour la requête de récupératon d'un utilisateur.
     * Transmettant la requête http reçue depuis la route vers le service associé,
     * vérifie si la requête à réussi ou échoué et agit en conséquence. 
     * @param httpRequest 
     * @returns 
     *     si OK -> statusCode 200 et le user en question
     *     si NOK -> statusCode 400 et le message d'erreur
     */
    async function getOneUser(httpRequest) {
        try {
            const user = await userService.listOneUser({ id: httpRequest.params.userId });
            return {
                statusCode: 200,
                body: [user]
            }
        } catch (e) {

            console.log(e);
            return { statusCode: 400, body: { error: e.message } }
        }
    }

    /**
     * Fonction de contrôle pour la requête de mise à jour d'un utilisateur.
     * Transmettant la requête http reçue depuis la route vers le service associé,
     * vérifie si la requête à réussi ou échoué et agit en conséquence. 
     * @param httpRequest 
     * @returns 
     *     si OK -> statusCode 200, un messages de réussite et le user modifié
     *     si NOK -> statusCode 400 et le message d'erreur
     */
    async function putOneUser(httpRequest) {
        try {
            const { ...userInfo } = httpRequest.body;

            const modifiedUser = await userService.putUser({ id: httpRequest.params.userId }, { ...userInfo });
            if (modifiedUser.message) {
                return { statusCode: 409, body: { success: false, ...modifiedUser, } }
            }
            return {
                statusCode: 200,
                body: {
                    success: true,
                    message: "User has been patched successfully",
                    user: modifiedUser[1].dataValues,
                }
            }
        } catch (e) {
            console.log(e);
            return { statusCode: 400, body: { error: e.message } }
        }

    }

    /**
     * Fonction de contrôle pour la requête de mise à jour du mot de passe d'un utilisateur.
     * Transmettant la requête http reçue depuis la route vers le service associé,
     * vérifie si la requête à réussi ou échoué et agit en conséquence. 
     * @param httpRequest 
     * @returns 
     *     si OK -> statusCode 200, un messages de réussite et le mot de passe modifié
     *     si NOK -> statusCode 400 et le message d'erreur
     */
    async function patchUserPwd(httpRequest) {
        try {
            const { ...userInfo } = httpRequest.body;
            const modifiedPwd = await userService.patchUserPwd({ id: httpRequest.params.userId }, { ...userInfo });
            if (modifiedPwd.message) {
                return { 
                    statusCode: 409,
                    body: { 
                        success: false,
                        ...modifiedPwd, 
                    }
                }
            }
            return {
                statusCode: 200,
                body: {
                    success: true,
                    message: "Password has successfully been updated",
                    user: modifiedPwd[1].dataValues,
                }
            }
        } catch (e) {
            console.log(e);
            return { statusCode: 400, body: { error: e.message } }
        }

    }

    async function deleteUser(httpRequest) {

        try {
            const deletedUser =
                await userService.removeUser({ id: httpRequest.params.userId });

            if (!deletedUser) {
                return {
                    statusCode: 404,
                    body: { message: "No valid entry found with provided id" }
                }
            }

            if (deletedUser.message) {
                return {
                    statusCode: 404,
                    body: { message: deletedUser.message }
                }
            }

            return {
                statusCode: 200,
                body: {
                    message: "User deleted successfully !",
                    removedUser: deletedUser
                }
            }
        } catch (e) {

            console.log(e);
            return { statusCode: 400, body: { error: e.message } }
        }

    }
};
