"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeFakeGroup;

function makeFakeGroup(name, descrition) {
  const group = {
    groupName: name,
    groupDescription: descrition
  };
  return { ...group
  };
}