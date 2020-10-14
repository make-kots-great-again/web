export default function makeGroupRepository({Group, userGroup, User}) {
    return Object.freeze({
        save, addUserToGroup, findMyGroups, findGroupById
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
                attributes: ['groupId', 'groupName'],
                through: {as: 'roleInThisGroup', attributes: ['role']}
            }]
        });
    }

    async function findGroupById({groupId}) {
        return Group.findOne({
            where: {groupId: groupId},
            attributes: ['groupId', 'groupName', 'groupDescription'],
            include: [{
                model: User,
                as: 'users',
                attributes: ['username', 'email'],
                through: {as: 'roleInThisGroup', attributes: ['role']}
            }]
        });
    }
}

// { fields: ['userId', 'groupId','role'] }
