export default function makeGroupRepository({Group}) {
    return Object.freeze({
        save
    });

    async function save({...groupInfo}) {
        return Group.create(groupInfo);
    }
}

