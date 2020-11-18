"use strict";

var _chai = require("chai");

var _mocha = require("mocha");

var _domain = require("../../../domain");

var _errors = require("../../../helpers/errors");

var _fakeGroup = _interopRequireDefault(require("../../fixtures/fakeGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//During the test the env variable is set to test
process.env.NODE_ENV = 'test'; //bring in dev-dependencies

(0, _mocha.describe)('GROUP ENTITY', () => {
  (0, _mocha.describe)('#group', () => {
    (0, _mocha.it)('it should make a group', () => {
      const randomGroup = Math.random().toString(36).substr(2, 9);
      const group = (0, _fakeGroup.default)(randomGroup, randomGroup + randomGroup);
      const buildGroup = (0, _domain.makeGroup)({ ...group
      });
      (0, _chai.expect)(buildGroup.getGroupName()).to.be.eql(group.groupName);
      (0, _chai.expect)(buildGroup.getGroupDescription()).to.be.eql(group.groupDescription);
    });
  });
  (0, _mocha.describe)('#groupName', () => {
    (0, _mocha.it)('a group must have a groupName', () => {
      const group = (0, _fakeGroup.default)(undefined, "test");
      (0, _chai.expect)(() => (0, _domain.makeGroup)({ ...group
      })).to.throw(_errors.RequiredParameterError, 'A groupName is a required.');
    });
    (0, _mocha.it)("a groupName can't be null", () => {
      const group = (0, _fakeGroup.default)(null, "test");
      (0, _chai.expect)(() => (0, _domain.makeGroup)({ ...group
      })).to.throw(TypeError, 'A groupName must be a string.');
    });
    (0, _mocha.it)("a groupName can't be a number", () => {
      const group = (0, _fakeGroup.default)(404, "test");
      (0, _chai.expect)(() => (0, _domain.makeGroup)({ ...group
      })).to.throw(TypeError, 'A groupName must be a string.');
    });
  });
  (0, _mocha.describe)('#groupDescription', () => {
    (0, _mocha.it)('a group must have a groupDescription', () => {
      const group = (0, _fakeGroup.default)("test", undefined);
      (0, _chai.expect)(() => (0, _domain.makeGroup)({ ...group
      })).to.throw(_errors.RequiredParameterError, 'A group description is a required.');
    });
    (0, _mocha.it)("a groupDescription can't be null", () => {
      const group = (0, _fakeGroup.default)("test", null);
      (0, _chai.expect)(() => (0, _domain.makeGroup)({ ...group
      })).to.throw(TypeError, 'A group description must be a string.');
    });
    (0, _mocha.it)("a groupDescription can't be a number", () => {
      const group = (0, _fakeGroup.default)("test", 404);
      (0, _chai.expect)(() => (0, _domain.makeGroup)({ ...group
      })).to.throw(TypeError, 'A group description must be a string.');
    });
  });
});