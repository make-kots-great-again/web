import {groupService} from "../services";

export default function groupControllerFactory() {
    return Object.freeze({
        createGroup
    });

    async function createGroup(httpRequest) {

        try {
            const {...groupInfo} = httpRequest.body;
            const {username} = httpRequest.params;

            const createdGroup = await groupService.addGroup(
                {username, ...groupInfo});

            if (createdGroup.message) {
                return {
                    statusCode: 404,
                    body: {message: createdGroup.message}
                }
            }

            return {
                statusCode: 201,
                body: {
                    success: true,
                    message: "A group has been created successfully",
                    group: createdGroup
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }

    }

};
