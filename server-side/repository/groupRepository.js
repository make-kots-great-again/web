export default function makeGroupRepository ({ Group, userGroup, User, Op }) {
  return Object.freeze({
    save,
    addUserToGroup,
    findMyGroups,
    findGroupById,
    findGroupByBarCode,
    removeUserFromGroup,
    removeGroup,
    updateGroup,
    findIdGroupUser,
    findByGroupIdOrByBarCode
  })

  async function save ({ ...groupInfo }) {
    return Group.create(groupInfo)
  }

  async function addUserToGroup ({ ...userInfo }) {
    return userGroup.create(userInfo)
  }

  async function findMyGroups ({ userId }) {
    return await User.findAll({
      where: { userId: userId },
      attributes: ['userId', 'username'],
      include: [{
        model: Group,
        as: 'groups',
        attributes: ['groupId', 'groupName'],
        through: { as: 'roleInThisGroup', attributes: ['role'] }
      }]
    })
  }

  async function findGroupById ({ groupId }) {
    return Group.findOne({
      where: { groupId: groupId },
      attributes: ['groupId', 'groupBarCode', 'groupName', 'groupDescription'],
      include: [{
        model: User,
        as: 'users',
        attributes: ['username', 'email'],
        through: { as: 'roleInThisGroup', attributes: ['role'] }
      }]
    })
  }

  async function findGroupByBarCode ({ groupBarCode }) {
    return Group.findOne({
      where: { groupBarCode: groupBarCode },
      attributes: ['groupId', 'groupBarCode', 'groupName', 'groupDescription']
    })
  }

  async function findIdGroupUser ({ groupId, userId }) {
    return userGroup.findOne({
      where: { groupId: groupId, userId: userId },
      attributes: ['id_group_user', 'groupId', 'userId']
    })
  }

  async function findByGroupIdOrByBarCode ({ groupIdBarcode }) {
    return Group.findAll({
      where: {
        [Op.or]: [
          { groupId: groupIdBarcode }, { groupBarCode: groupIdBarcode }
        ]
      }
    })
  }

  async function updateGroup ({ groupId, ...groupInfo }) {
    return Group.update({ ...groupInfo }, { where: { groupId: groupId } })
  }

  async function removeUserFromGroup ({ groupId, userId }) {
    return userGroup.destroy({ where: { userId: userId, groupId: groupId } })
  }

  async function removeGroup ({ groupId }) {
    return Group.destroy({ where: { groupId: groupId } })
  }
}
