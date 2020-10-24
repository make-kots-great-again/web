import {Group} from './groups';
import {userGroup} from './userGroups';
import {User} from './users';
import {Product} from './products';
import {ShoppingList} from './shoppingList';

User.belongsToMany(Group, {through: userGroup, foreignKey: 'userId', as: 'groups'});
Group.belongsToMany(User, {through: userGroup, foreignKey: 'groupId', as: 'users'});

Product.hasMany(ShoppingList);
ShoppingList.belongsTo(Product, {foreignKey: 'code', as: 'product'});

userGroup.hasMany(ShoppingList);
ShoppingList.belongsTo(userGroup, {foreignKey: 'id_group_user', as: 'owners'});

export {User, Group, userGroup, Product, ShoppingList}
