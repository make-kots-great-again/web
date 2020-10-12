import {makeGroup} from '../domain'

export default function groupServiceFactory({groupRepository, userRepository}) {
    return Object.freeze({
        addGroup
    });

    async function addGroup({username, ...groupInfo}) {

        const group = makeGroup({...groupInfo});

        const createGroup = await groupRepository.save({
            groupName: group.getGroupName(),
            groupDescription: group.getGroupDescription()
        });

       const groupAdmin = await userRepository.findByUsername({username});

       const {userId} = groupAdmin[0].dataValues
       const {groupId} = createGroup.dataValues

        await groupRepository.addUserToGroup({
            userId: userId,
            groupId: groupId,
            role: 'admin'
        });

        //const {dataValues: data} = t["0"];
        //console.log(t.dataValues)
        //console.log(groupAdmin[0].dataValues)

        return createGroup;
    }


}
