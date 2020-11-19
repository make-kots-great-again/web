"use strict";

var _chai = require("chai");

var _mocha = require("mocha");

var _fakeUser = _interopRequireDefault(require("../../fixtures/fakeUser"));

var _domain = require("../../../domain");

var _errors = require("../../../helpers/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//During the test the env variable is set to test
process.env.NODE_ENV = 'test'; //bring in dev-dependencies

(0, _mocha.describe)('USER ENTITY', () => {
  (0, _mocha.describe)('#user', () => {
    (0, _mocha.it)('it should make a user', () => {
      const user = (0, _fakeUser.default)();
      const buildUser = (0, _domain.makeUser)({ ...user
      });
      (0, _chai.expect)(buildUser.getFirstName()).to.be.eql(user.firstName);
      (0, _chai.expect)(buildUser.getLastName()).to.be.eql(user.lastName);
      (0, _chai.expect)(buildUser.getUsername()).to.be.eql(user.username);
      (0, _chai.expect)(buildUser.getEmail()).to.be.eql(user.email);
      (0, _chai.expect)(buildUser.getPassword()).not.to.be.eql(user.password);
    });
  });
  (0, _mocha.describe)('#username', () => {
    (0, _mocha.it)('a user must have a username', () => {
      const user = (0, _fakeUser.default)({
        username: undefined
      });
      (0, _chai.expect)(() => (0, _domain.makeUser)({ ...user
      })).to.throw(_errors.RequiredParameterError, 'A username is a required.');
    });
    (0, _mocha.it)("a username can't be null", () => {
      const user = (0, _fakeUser.default)({
        username: null
      });
      (0, _chai.expect)(() => (0, _domain.makeUser)({ ...user
      })).to.throw(TypeError, 'A username must be a string.');
    });
    (0, _mocha.it)("a username can't be a number", () => {
      const user = (0, _fakeUser.default)({
        username: 123
      });
      (0, _chai.expect)(() => (0, _domain.makeUser)({ ...user
      })).to.throw(TypeError, 'A username must be a string.');
    });
    (0, _mocha.it)("a username max length must be 32", () => {
      const user = (0, _fakeUser.default)({
        username: "abc".repeat(35)
      });
      (0, _chai.expect)(() => (0, _domain.makeUser)({ ...user
      })).to.throw(RangeError, 'A username length must be between 4 and 32.');
    });
    (0, _mocha.it)("a username min length must be 4", () => {
      const user = (0, _fakeUser.default)({
        username: "ab"
      });
      (0, _chai.expect)(() => (0, _domain.makeUser)({ ...user
      })).to.throw(RangeError, 'A username length must be between 4 and 32.');
    });
  });
  (0, _mocha.describe)('#email', () => {
    (0, _mocha.it)('a user must have an email', () => {
      const user = (0, _fakeUser.default)({
        email: undefined
      });
      (0, _chai.expect)(() => (0, _domain.makeUser)({ ...user
      })).to.throw(_errors.RequiredParameterError, 'An email is a required.');
    });
    (0, _mocha.it)("an email must be a valid email", () => {
      const user = (0, _fakeUser.default)({
        email: "dangamil.com"
      });
      (0, _chai.expect)(() => (0, _domain.makeUser)({ ...user
      })).to.throw(SyntaxError, 'Invalid email.');
    });
    (0, _mocha.it)("an email can't be null", () => {
      const user = (0, _fakeUser.default)({
        email: null
      });
      (0, _chai.expect)(() => (0, _domain.makeUser)({ ...user
      })).to.throw(SyntaxError, 'An email must be of type string.');
    });
    (0, _mocha.it)("an email can't be a number", () => {
      const user = (0, _fakeUser.default)({
        email: 123
      });
      (0, _chai.expect)(() => (0, _domain.makeUser)({ ...user
      })).to.throw(SyntaxError, 'An email must be of type string.');
    });
  });
  (0, _mocha.describe)('#password', () => {
    (0, _mocha.it)("a user must a have password", () => {
      const user = (0, _fakeUser.default)({
        password: undefined
      });
      (0, _chai.expect)(() => (0, _domain.makeUser)({ ...user
      })).to.throw(_errors.RequiredParameterError, 'A password is a required.');
    });
    (0, _mocha.it)("can hash password", () => {
      const user = (0, _fakeUser.default)();
      const password = (0, _domain.makeUser)({ ...user
      }).getPassword();
      (0, _chai.expect)(password.match(/^\$2[aby]?\$\d{1,2}\$[.\/A-Za-z0-9]{53}$/)).to.not.be.null;
    });
    (0, _mocha.it)("a password can't be a null", () => {
      const user = (0, _fakeUser.default)({
        password: null
      });
      (0, _chai.expect)(() => (0, _domain.makeUser)({ ...user
      })).to.throw(TypeError, 'The password must be of type string.');
    });
    (0, _mocha.it)("a password can't be a number", () => {
      const user = (0, _fakeUser.default)({
        password: 123
      });
      (0, _chai.expect)(() => (0, _domain.makeUser)({ ...user
      })).to.throw(TypeError, 'The password must be of type string.');
    });
  });
});