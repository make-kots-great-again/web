import {makeGroup} from '../domain'

export default function groupServiceFactory({groupRepository, userRepository}) {
    return Object.freeze({
        addGroup, listMyGroups, getGroup, addMembersToGroup
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

    async function listMyGroups({userId}) {

        return await groupRepository.findMyGroups({userId});

    }

    async function getGroup({groupId}) {

        if (!groupId) return {message: 'You must supply an id.'};

        if (!(groupId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${groupId} is not a valid UUID`};

        const group = await groupRepository.findGroupById({groupId});

        if (!group) return {message: `No group was found with this id : ${groupId}`};

        return group;
    }

    async function addMembersToGroup({groupId, username}) {

        if (!groupId) return {message: 'You must supply a groupId.'};
        if (!username) return {message: 'You must a username'};

        if (!(groupId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${groupId} is not a valid UUID`};

        if (typeof username !== 'string')
            return {message: 'A username must be a string.'};

        if (username.length < 4 || username.length >= 32)
            return {message: 'A username length must be between 4 and 32.'};

        const group = await groupRepository.findGroupById({groupId});

        if (!group) return {message: `No group was found with this id : ${groupId}`};

        const user = await userRepository.findByUsername({username});

        if (!user) return {message: `No user was found with this username : ${username}`};

        const {users} = group.dataValues;

        const existingMember = users.find(x => x.username === user.dataValues.username)

        if (existingMember)
            return {message: `${username} is already in this group !`};

        return await groupRepository.addUserToGroup({
            userId: user.dataValues.userId,
            groupId: group.dataValues.groupId,
            role: 'member'
        });
    }

}
