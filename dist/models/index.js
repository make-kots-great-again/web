"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function () {
    return _groups.Group;
  }
});
Object.defineProperty(exports, "userGroup", {
  enumerable: true,
  get: function () {
    return _userGroups.userGroup;
  }
});
Object.defineProperty(exports, "User", {
  enumerable: true,
  get: function () {
    return _users.User;
  }
});

var _groups = require("./groups");

var _userGroups = require("./userGroups");

var _users = require("./users");

_groups.Group.belongsToMany(_users.User, {
  through: _userGroups.userGroup,
  foreignKey: 'groupId',
  as: 'users'
});

_users.User.belongsToMany(_groups.Group, {
  through: _userGroups.userGroup,
  foreignKey: 'userId',
  as: 'groups'
});