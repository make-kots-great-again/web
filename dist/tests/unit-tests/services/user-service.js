"use strict";

var _app = _interopRequireDefault(require("../../../../app"));

var _chai = require("chai");

var _mocha = require("mocha");

var _fakeUser = _interopRequireDefault(require("../../fixtures/fakeUser"));

var _environment = _interopRequireDefault(require("../../../config/environment"));

var _services = require("../../../services");

var _repository = require("../../../repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//During the test the env variable is set to test
process.env.NODE_ENV = 'test'; //import server to bring in everything together

//TODO test can login function
(0, _mocha.describe)('USER SERVICE', () => {
  (0, _mocha.describe)('#register-user', () => {
    (0, _mocha.it)('inserts a user in the database', async () => {
      const { ...fakeUser
      } = (0, _fakeUser.default)();
      const inserted = await _services.userService.addUser({ ...fakeUser
      });
      fakeUser.password = inserted.password;
      fakeUser.userId = inserted.userId;
      (0, _chai.expect)(inserted).to.deep.include(fakeUser);
      await _repository.userRepository.remove({
        id: inserted.userId
      });
    });
    (0, _mocha.it)("can't register a user if he/she already exists", async () => {
      const { ...fakeUser
      } = (0, _fakeUser.default)();
      const firstUser = await _services.userService.addUser({ ...fakeUser
      });
      const secondtUser = await _services.userService.addUser({ ...fakeUser
      });
      (0, _chai.expect)(secondtUser.message).to.equal("A user with the same username or email already exists !");
      await _repository.userRepository.remove({
        id: firstUser.userId
      });
    });
  });
  (0, _mocha.describe)('#login-user', () => {
    (0, _mocha.it)("can authenticate a user", async () => {
      const { ...fakeUser
      } = (0, _fakeUser.default)();
      const createdUser = await _services.userService.addUser({ ...fakeUser
      });
      const loggedInUser = await _services.userService.logInUser({
        pseudo: fakeUser.username,
        password: fakeUser.password
      });
      (0, _chai.expect)(loggedInUser).to.have.property('token');
      (0, _chai.expect)(loggedInUser.data.username).to.equal(fakeUser.username);
      await _repository.userRepository.remove({
        id: createdUser.userId
      });
    });
    (0, _mocha.it)("must include an pseudo", async () => {
      const loggedInUser = await _services.userService.logInUser({
        pseudo: undefined,
        password: "123"
      });
      (0, _chai.expect)(loggedInUser.message).to.equal("You must supply a pseudo.");
    });
    (0, _mocha.it)("must include an password", async () => {
      const loggedInUser = await _services.userService.logInUser({
        pseudo: "12345",
        password: undefined
      });
      (0, _chai.expect)(loggedInUser.message).to.equal("You must supply a password.");
    });
    (0, _mocha.it)("can't authenticate unregistered user", async () => {
      const loggedInUser = await _services.userService.logInUser({
        pseudo: '*******',
        password: '*******'
      });
      (0, _chai.expect)(loggedInUser.message).to.equal("Authentication failed !");
    });
    (0, _mocha.it)("can't authenticate a user with a wrong password user", async () => {
      const { ...fakeUser
      } = (0, _fakeUser.default)();
      const createdUser = await _services.userService.addUser({ ...fakeUser
      });
      const loggedInUser = await _services.userService.logInUser({
        pseudo: fakeUser.username,
        password: '*******'
      });
      (0, _chai.expect)(loggedInUser.message).to.equal("Authentication failed !");
      await _repository.userRepository.remove({
        id: createdUser.userId
      });
    });
  });
  (0, _mocha.describe)('#list-users', () => {});
  (0, _mocha.describe)('#list-one-user', () => {
    (0, _mocha.it)("find user by id", async () => {
      const { ...fakeUser
      } = (0, _fakeUser.default)();
      const inserted = await _services.userService.addUser({ ...fakeUser
      });
      fakeUser.userId = inserted.userId;
      const listedOneUser = await _services.userService.listOneUser({
        id: fakeUser.userId
      });
      (0, _chai.expect)(listedOneUser.dataValues.username).to.equal(fakeUser.username);
      (0, _chai.expect)(listedOneUser.dataValues.firstName).to.equal(fakeUser.firstName);
      (0, _chai.expect)(listedOneUser.dataValues.lastName).to.equal(fakeUser.lastName);
      (0, _chai.expect)(listedOneUser.dataValues.email).to.equal(fakeUser.email);
      await _repository.userRepository.remove({
        id: inserted.userId
      });
    });
    (0, _mocha.it)("must include an id", async () => {
      const listedOneUser = await _services.userService.listOneUser();
      (0, _chai.expect)(listedOneUser.message).to.equal('You must supply an id.');
    });
    (0, _mocha.it)("id must be valid", async () => {
      const listedOneUser = await _services.userService.listOneUser({
        id: "%,!123"
      });
      (0, _chai.expect)(listedOneUser.message).to.equal('%,!123 is not a valid v4 UUID');
    });
  });
  (0, _mocha.describe)('#put-one-user', () => {
    (0, _mocha.it)("put user with id", async () => {
      const { ...fakeUser
      } = (0, _fakeUser.default)();
      const inserted = await _services.userService.addUser({ ...fakeUser
      });
      fakeUser.userId = inserted.userId;
      const modifiedUserInfo = {
        username: 'test45',
        lastName: 'test456',
        firstName: 'test457',
        email: fakeUser.email
      };
      const puttedUser = await _services.userService.putUser({
        id: fakeUser.userId
      }, { ...modifiedUserInfo
      });
      (0, _chai.expect)(puttedUser[1].dataValues.username).to.equal(modifiedUserInfo.username);
      (0, _chai.expect)(puttedUser[1].dataValues.firstName).to.equal(modifiedUserInfo.firstName);
      (0, _chai.expect)(puttedUser[1].dataValues.lastName).to.equal(modifiedUserInfo.lastName);
      (0, _chai.expect)(puttedUser[1].dataValues.email).to.equal(modifiedUserInfo.email);
      await _repository.userRepository.remove({
        id: inserted.userId
      });
    });
    (0, _mocha.it)("url must include an id", async () => {
      const puttedUser = await _services.userService.listOneUser();
      (0, _chai.expect)(puttedUser.message).to.equal('You must supply an id.');
    });
    (0, _mocha.it)("id must be valid", async () => {
      const puttedUser = await _services.userService.listOneUser({
        id: "%,!123"
      });
      (0, _chai.expect)(puttedUser.message).to.equal('%,!123 is not a valid v4 UUID');
    });
  });
  (0, _mocha.describe)('#remove-user', () => {});
});