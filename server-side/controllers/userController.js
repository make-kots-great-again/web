import {userService} from "../services";
export default function userControllerFactory() {
    return Object.freeze({
        registerUser, getAllUsers, logInUser
    });

    async function registerUser(httpRequest) {

        try {
            const {...userInfo} = httpRequest.body;

            const createdUser = await userService.addUser({...userInfo});

            if (createdUser.message) {

                return {statusCode: 409, body: {success: false, ...createdUser,}}
            }

            return {
                statusCode: 201,
                body: {
                    success: true,
                    message: "User has been created successfully",
                    user : createdUser
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }

    }

    async function logInUser(httpRequest) {

        try {
            const {pseudo, password} = httpRequest.body;

            const user = await userService.logInUser({pseudo, password});

            if (user.message) {
                return {statusCode: 401, body: {success: false, ...user}};
            }

            const {username, email, userId: id} = user.data;

            return {
                statusCode: 200,
                body: {
                    success: true, token: user.token,
                    user: {
                        userId: id, username: username,
                        userEmail: email
                    }
                }
            }

        } catch (e) {

            console.log(e);

            return {statusCode: 400, body: {error: e.message}}
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
            return {statusCode: 400, body: {error: e.message}}
        }
    }
};
