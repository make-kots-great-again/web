import {groupService} from "../services";

export default function groupControllerFactory() {
    return Object.freeze({
        createGroup, getMyGroups, getOneGroup, addMembersToGroup,
        leaveGroup, deleteGroup, updateGroup, getGroupToken
    });

    async function createGroup(httpRequest) {

        try {
            const {...groupInfo} = httpRequest.body;
            const {username} = httpRequest.user;

            const createdGroup = await groupService.addGroup(
                {username, ...groupInfo});

            return {
                statusCode: 201,
                body: {
                    success: true,
                    message: "A group has been created successfully !",
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

            const {userId} = httpRequest.user;

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

    async function getOneGroup(httpRequest) {

        try {

            const {groupId} = httpRequest.params;

            const group = await groupService.getGroup({groupId});

            if (group.message) {
                return {
                    statusCode: 404,
                    body: {success: false, message: group.message}
                }
            }

            return {
                statusCode: 200,
                body: {
                    success: true,
                    groupInfo: group
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }
    }

    async function updateGroup(httpRequest) {

        try {

            const {groupId} = httpRequest.params;
            const {username} = httpRequest.user;
            const {...changes} = httpRequest.body;

            const updatedGroup = await groupService.patchGroup(
                {username, groupId, ...changes});

            if (updatedGroup.message) {
                return {
                    statusCode: 404,
                    body: {success: false, message: updatedGroup.message}
                }
            }

            return {
                statusCode: 200,
                body: {
                    success: true,
                    message: "This group's info was was successfully updated !"
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }
    }

    async function addMembersToGroup(httpRequest) {
        try {

            const {groupId} = httpRequest.params;
            const {username} = httpRequest.params;

            const group = await groupService.addMembersToGroup(
                {groupId, username});

            if (group.message) {
                return {
                    statusCode: 404,
                    body: {success: false, message: group.message}
                }
            }

            return {
                statusCode: 200,
                body: {
                    success: true,
                    message: `${username} has been successfully added to this group !`,
                    groupInfo: group
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }
    }

    async function leaveGroup(httpRequest) {
        try {

            const {groupId} = httpRequest.params;
            const {userId} = httpRequest.params;

            const deletedUser = await groupService.deleteUserFromGroup(
                {groupId, userId});

            if (deletedUser.message) {
                return {
                    statusCode: 404,
                    body: {success: false, message: deletedUser.message}
                }
            }

            return {
                statusCode: 200,
                body: {
                    success: true,
                    message: "User was successfully removed from this group !"
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }
    }

    async function deleteGroup(httpRequest) {

        try {

            const {groupId} = httpRequest.params;

            const deletedUser = await groupService.deleteGroup(
                {groupId});

            if (deletedUser.message) {
                return {
                    statusCode: 404,
                    body: {success: false, message: deletedUser.message}
                }
            }

            return {
                statusCode: 200,
                body: {
                    success: true,
                    message: "This group was was successfully deleted !"
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }
    }

    /**
     * Fonction de contrôle pour la requête de récupération d'un token JWT
     * pour un groupe.
     * Transmettant la requête http reçue depuis la route vers le service associé,
     * vérifie si la requête à réussi ou échoué et agit en conséquence.
     * @param httpRequest
     * @returns
     *     si OK -> statusCode 200, un messages de réussite et le token JWT
     *     si NOK -> statusCode 400 et le message d'erreur
     */
    async function getGroupToken(httpRequest) {

        try {

            const {groupId} = httpRequest.params;

            const token = await groupService.getGroupToken({groupId});

            if (token.message) {
                return {
                    statusCode: 404,
                    body: {success: false, message: token.message}
                }
            }

            return {
                statusCode: 200,
                body: {
                    success: true,
                    token: token
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }
    }

};
