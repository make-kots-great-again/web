import {makeGroup} from '../domain'

export default function groupServiceFactory({groupRepository, userRepository}) {
    return Object.freeze({
        addGroup
    });

    async function addGroup({username, ...groupInfo}) {

        if (!username) return {message: 'You must supply a username.'};

        const groupAdmin = await userRepository.findByUsername({username});

        if (!groupAdmin)
            return {message: "No valid entry found with provided username"}

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

}
