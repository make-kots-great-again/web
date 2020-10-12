export default function makeGroupRepository({Group, userGroup}) {
    return Object.freeze({
        save, addUserToGroup
    });

    async function save({...groupInfo}) {
        return Group.create(groupInfo);
    }

    async function addUserToGroup({...userInfo}) {
        return userGroup.create(userInfo);
    }
}

