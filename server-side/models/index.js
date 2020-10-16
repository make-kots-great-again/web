import {Group} from "./groups";
import {userGroup} from "./userGroups";
import {User} from "./users";
import {Product} from "./products";

User.belongsToMany(Group, {through: userGroup, foreignKey: 'userId', as: 'groups'});
Group.belongsToMany(User, {through: userGroup, foreignKey: 'groupId', as: 'users'});

export {User, Group, userGroup, Product}
