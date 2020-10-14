"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _services = require("../../services");

var _repository = require("../../repository");

var _make2users = _interopRequireDefault(require("./make2users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersRbac = async () => {
  const user1 = (0, _make2users.default)().user1;
  const user2 = (0, _make2users.default)().user2;
  const createdUser1 = await _services.userService.addUser({ ...user1
  });
  const createdUser2 = await _services.userService.addUser({ ...user2
  });
  await _repository.userRepository.patch({
    id: createdUser1.createdUser._id,
    isVerified: true
  });
  await _repository.userRepository.patch({
    id: createdUser2.createdUser._id,
    isVerified: true
  });
  const logInUser1 = await _services.userService.logInUser({
    "pseudo": user1.username,
    "password": user1.password
  });
  const logInUser2 = await _services.userService.logInUser({
    "pseudo": user2.username,
    "password": user2.password
  });
  const firstUserId = createdUser1.createdUser._id;
  const username1 = createdUser1.createdUser.username;
  return Object.freeze({
    createdUser1,
    createdUser2,
    logInUser1,
    logInUser2,
    firstUserId,
    username1
  });
};

var _default = usersRbac;
exports.default = _default;