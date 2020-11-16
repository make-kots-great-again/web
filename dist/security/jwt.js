"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeJwtFactory;

var _environment = _interopRequireDefault(require("../config/environment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeJwtFactory({
  jwt
}) {
  return Object.freeze({
    generateJwt,
    generateGroupJwt
  });

  function generateJwt({
    username,
    userEmail,
    userId
  } = {}) {
    return "JWT " + jwt.sign({
      username: username,
      userEmail: userEmail,
      userId: userId
    }, _environment.default.JWT_KEY, {
      expiresIn: "7d"
    });
  }

  function generateGroupJwt({
    gName,
    gId
  } = {}) {
    return "JWT " + jwt.sign({
      groupeName: gName,
      groupId: gId
    }, _environment.default.JWT_KEY, {
      expiresIn: "14d"
    });
  }
}