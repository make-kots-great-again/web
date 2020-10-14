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
  (0, _mocha.describe)('#remove-user', () => {});
});