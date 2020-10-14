"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userServiceFactory;

var _domain = require("../domain");

var _security = require("../security");

function userServiceFactory({
  userRepository
}) {
  return Object.freeze({
    addUser,
    listUsers,
    logInUser,
    removeUser
  });

  async function addUser({ ...userInfo
  }) {
    const user = (0, _domain.makeUser)({ ...userInfo
    });
    const existing = await userRepository.findByEmailOrUsername({ ...userInfo
    });
    if (existing.length !== 0) return {
      message: "A user with the same username or email already exists !"
    };
    return await userRepository.save({
      username: user.getUsername(),
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      email: user.getEmail(),
      password: user.getPassword()
    });
  }

  async function logInUser({
    pseudo,
    password
  } = {}) {
    if (!pseudo) return {
      message: 'You must supply a pseudo.'
    };
    if (!password) return {
      message: 'You must supply a password.'
    };
    const existing = await userRepository.findPseudo({
      pseudo
    });
    if (existing.length === 0) return {
      message: "Authentication failed !"
    };
    const {
      dataValues: data
    } = existing["0"];
    const {
      email: userEmail,
      userId: id,
      password: userPassword
    } = data;
    const validPassword = await _security.passwordFactory.verifyPassword(password, userPassword);
    if (!validPassword) return {
      message: "Authentication failed !"
    };
    if (validPassword) return {
      token: _security.jwtFactory.generateJwt({
        userEmail,
        id
      }),
      data
    };
  }

  async function listUsers() {
    return userRepository.findAll();
  }

  async function removeUser({
    id
  } = {}) {
    if (!id) return {
      message: 'You must supply an id.'
    };
    if (!id.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)) return {
      message: `${id} is not a valid UUID`
    };
    return userRepository.remove({
      id
    });
  }
}