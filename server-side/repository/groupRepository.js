export default function makeGroupRepository({Group, userGroup, User}) {
    return Object.freeze({
        save, addUserToGroup, findMyGroups, findGroupById, removeUserFromGroup,
        removeGroup, updateGroup
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


    async function updateGroup({groupId, ...groupInfo}) {
        return Group.update({...groupInfo}, {where: {groupId: groupId}});
    }

    async function removeUserFromGroup({groupId, userId}) {
        return userGroup.destroy({where: {userId: userId, groupId: groupId}});
    }

    async function removeGroup({groupId}) {
        return Group.destroy({where: {groupId: groupId}});
    }
}

// { fields: ['userId', 'groupId','role'] }
