import {Group} from "./groups";
import {userGroup} from "./userGroups";
import {User} from "./users";
import {Product} from "./products";
import {ShoppingList} from "./shoppingList";

User.belongsToMany(Group, {through: userGroup, foreignKey: 'userId', as: 'groups'});
Group.belongsToMany(User, {through: userGroup, foreignKey: 'groupId', as: 'users'});

Product.hasMany(ShoppingList);
ShoppingList.belongsTo(Product, {foreignKey: 'code', as: 'product'});

userGroup.hasMany(ShoppingList);
ShoppingList.belongsTo(userGroup, {foreignKey: 'userId', as: 'users'});
ShoppingList.belongsTo(userGroup, {foreignKey: 'groupId', as: 'groups'});

export {User, Group, userGroup, Product, ShoppingList}


/*
Product.hasMany(ShoppingList);
ShoppingList.belongsTo(Product, {foreignKey: 'code', as: 'product'});

userGroup.hasMany(ShoppingList);
ShoppingList.belongsTo(userGroup, {foreignKey: 'userId', as: 'users'});
ShoppingList.belongsTo(userGroup, {foreignKey: 'groupId', as: 'groups'});

 */
