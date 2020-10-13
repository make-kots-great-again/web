import {groupService} from "../services";

export default function groupControllerFactory() {
    return Object.freeze({
        createGroup, getMyGroups
    });

    async function createGroup(httpRequest) {

        try {
            const {...groupInfo} = httpRequest.body;
            const {username} = httpRequest.user.dataValues;

            const createdGroup = await groupService.addGroup(
                {username, ...groupInfo});

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


    async function getMyGroups(httpRequest) {

        try {

            const {userId} = httpRequest.user.dataValues;

            const myGroups = await groupService.listMyGroups({userId});

            return {
                statusCode: 200,
                body: {
                    success: true,
                    userInfo: myGroups
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }
    }
};
