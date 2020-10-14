"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _users = require("./users");

var _groups = require("./groups");

const routes = Object.freeze({
  usersRoutes: _users.usersRoutes,
  groupsRoutes: _groups.groupsRoutes
});
var _default = routes;
exports.default = _default;