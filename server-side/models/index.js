import {Group} from "./groups";
import {userGroup} from "./userGroups";
import {User} from "./users";

Group.belongsToMany(User, {through: userGroup, foreignKey: 'groupId', as : 'users'});
User.belongsToMany(Group, {through: userGroup, foreignKey: 'userId', as : 'groups'});

export {Group, User, userGroup}
