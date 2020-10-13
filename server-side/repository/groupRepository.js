export default function makeGroupRepository({Group, userGroup, User}) {
    return Object.freeze({
        save, addUserToGroup, findMyGroups
    });

    async function save({...groupInfo}) {
        return Group.create(groupInfo);
    }

    async function addUserToGroup({...userInfo}) {
        return userGroup.create(userInfo);
    }

    async function findMyGroups({userId}) {
        return await User.findAll({
            where: {userId: userId},
            attributes: ['userId', 'username'],
            include: [{
                model: Group,
                as: 'groups',
                attributes: ['groupName'],
                through: {as: 'role in this group', attributes: ['role']}
            }]
        });
    }
}

// { fields: ['userId', 'groupId','role'] }
