import {userService} from "../services";
import env from "../config/environment";
export default function userControllerFactory() {
    return Object.freeze({
        registerUser,
    });

    async function registerUser(httpRequest) {

        try {
            const {...userInfo} = httpRequest.body;

            const posted = await userService.addUser({...userInfo});

            console.log(httpRequest.body) ;
            console.log("********************") ;
            console.log(posted)

            return {
                statusCode: 201,
                body: {
                    success: true,
                    message: "User has been created successfully",
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }

    }
};
