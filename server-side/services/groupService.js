import {makeGroup} from '../domain'

export default function groupServiceFactory({groupRepository, userRepository}) {
    return Object.freeze({
        addGroup, listMyGroups, getGroup
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

    async function listMyGroups({userId}){

        return await groupRepository.findMyGroups({userId});

    }

    async function getGroup({groupId}){

        if (!groupId) return {message: 'You must supply an id.'};

        if (!(groupId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${groupId} is not a valid UUID`};

        return await groupRepository.findGroupById({groupId});
    }

}
