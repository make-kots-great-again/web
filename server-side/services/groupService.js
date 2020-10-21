import {makeGroup} from '../domain'

export default function groupServiceFactory({groupRepository, userRepository}) {
    return Object.freeze({
        addGroup, listMyGroups, getGroup, addMembersToGroup,
        deleteUserFromGroup, deleteGroup, patchGroup
    });

    async function addGroup({username, ...groupInfo}) {

        const groupAdmin = await userRepository.findByUsername({username});

        const group = makeGroup({...groupInfo});

        const createGroup = await groupRepository.save({
            groupName: group.getGroupName(),
            groupDescription: group.getGroupDescription()
        });

        const {userId} = groupAdmin.dataValues
        const {groupId} = createGroup.dataValues

        await groupRepository.addUserToGroup({
            userId: userId,
            groupId: groupId,
            role: 'admin'
        });

        return createGroup;
    }

    async function patchGroup({username, groupId, ...changes}) {

        const groupInfo = await this.getGroup({groupId});

        if (groupInfo.message) return {message: groupInfo.message};

        const users = [];

        groupInfo.dataValues.users.forEach(x => users.push({
            username: x.dataValues.username,
            role: x.roleInThisGroup.dataValues.role
        }));

        const findAdmin= users.find(x => x.role === 'admin');

        if (findAdmin.username !== username)
            return {message: 'Only the admin of this group can the latter.'};

        const group = makeGroup({...changes});

        return  groupRepository.updateGroup({
            groupId : groupId,
            groupName: group.getGroupName(),
            groupDescription: group.getGroupDescription()
        });
    }

    async function listMyGroups({userId}) {

        return await groupRepository.findMyGroups({userId});

    }

    async function getGroup({groupId}) {

        if (!groupId) return {message: 'You must supply a group id.'};

        if (!(groupId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${groupId} is not a valid UUID`};

        const group = await groupRepository.findGroupById({groupId});

        if (!group) return {message: `No group was found with this id : ${groupId}`};

        return group;
    }

    async function addMembersToGroup({groupId, username}) {

        if (!username) return {message: 'You must supply a username'};

        if (typeof username !== 'string')
            return {message: 'A username must be a string.'};

        if (username.length < 4 || username.length >= 32)
            return {message: 'A username length must be between 4 and 32.'};

        const groupInfo = await this.getGroup({groupId});

        if (groupInfo.message) return {message: groupInfo.message};

        const user = await userRepository.findByUsername({username});

        if (!user) return {message: `No user was found with this username : ${username}`};

        const {users} = groupInfo.dataValues;

        const existingMember = users.find(x => x.username === user.dataValues.username)

        if (existingMember)
            return {message: `${username} is already in this group !`};

        return groupRepository.addUserToGroup({
            userId: user.dataValues.userId,
            groupId: groupInfo.dataValues.groupId,
            role: 'member'
        });
    }

    async function deleteUserFromGroup({groupId, userId}) {

        if (!groupId) return {message: 'You must supply a groupId.'};
        if (!userId) return {message: 'You must a userId'};

        const deleteUser = await groupRepository.removeUserFromGroup({groupId, userId});

        console.log(deleteUser)

        if (deleteUser === 0)
            return {message: 'No user with that name was found in this group'};

        return groupRepository.removeUserFromGroup({groupId, userId});
    }

    async function deleteGroup({groupId}) {

        if (!groupId) return {message: 'You must supply a groupId.'};

        const deleteGroup = await groupRepository.removeGroup({groupId});

        if (deleteGroup === 0)
            return {message: 'No group with that id was found !'};

        return deleteGroup;
    }

}
