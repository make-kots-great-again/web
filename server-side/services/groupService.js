import {makeGroup} from '../domain'

export default function groupServiceFactory({groupRepository}) {
    return Object.freeze({
        addGroup
    });

    async function addGroup({...groupInfo}) {

        const group = makeGroup({...groupInfo});

        return await groupRepository.save({
            groupName: group.getGroupName()
        });

    }


}
