import Group from './groups'
import userGroup from './userGroups'
import User from './users'
import Product from './products'
import ShoppingList from './shoppingList'
import Reserve from './reserve'

User.belongsToMany(Group, { through: userGroup, foreignKey: 'userId', as: 'groups' })
Group.belongsToMany(User, { through: userGroup, foreignKey: 'groupId', as: 'users' })

Product.hasMany(ShoppingList, { foreignKey: 'code', as: 'productCode' })
ShoppingList.belongsTo(Product, { foreignKey: 'code', as: 'product' })

userGroup.hasMany(ShoppingList, { foreignKey: 'id_group_user', as: 'idGroupUser' })
ShoppingList.belongsTo(userGroup, { foreignKey: 'id_group_user', as: 'owners' })

Group.hasMany(Reserve, { foreignKey: 'groupId', as: 'groupReserve' })
Reserve.belongsTo(Group, { foreignKey: 'groupId', as: 'owners' })

Product.hasMany(Reserve, { foreignKey: 'code', as: 'productCodeBarre' })
Reserve.belongsTo(Product, { foreignKey: 'code', as: 'productInfo' })

export { User, Group, userGroup, Product, ShoppingList, Reserve }
