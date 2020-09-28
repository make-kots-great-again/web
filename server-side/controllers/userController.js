import {userService} from "../services";
export default function userControllerFactory() {
    return Object.freeze({
        registerUser, getAllUsers
    });

    async function registerUser(httpRequest) {

        try {
            const {...userInfo} = httpRequest.body;

            const createdUser = await userService.addUser({...userInfo});
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
