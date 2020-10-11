import {userService} from "../services";
export default function userControllerFactory() {
    return Object.freeze({
        registerUser, getAllUsers, getOneUser, logInUser, deleteUser, patchOneUser
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

    async function getOneUser(httpRequest) {

        try {
            const user = await userService.listOneUser({id: httpRequest.params.userId});
            return {
                statusCode: 200,
                body: [user]
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }
    }

    async function patchOneUser(httpRequest) {
        
        try {
            const {...userInfo} = httpRequest.body; 
            
            const patchedUser = await userService.patchUser({...userInfo});

            if (patchedUser.message) {

                return {statusCode: 409, body: {success: false, ...patchedUser,}}
            }

            return {
                statusCode: 204,
                body: {
                    success: true,
                    message: "User has been patched successfully",
                    user : patchedUser
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }
        
    }

    async function deleteUser(httpRequest) {

        try {
            const deletedUser =
                await userService.removeUser({id: httpRequest.params.userId});

            if (!deletedUser) {
                return {
                    statusCode: 404,
                    body: {message: "No valid entry found with provided id"}
                }
            }

            if (deletedUser.message) {
                return {
                    statusCode: 404,
                    body: {message: deletedUser.message}
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
            return {statusCode: 400, body: {error: e.message}}
        }

    }
};
