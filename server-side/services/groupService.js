import {makeGroup} from '../domain'

export default function groupServiceFactory({groupRepository, userRepository}) {
    return Object.freeze({
        addGroup, listMyGroups
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

}
