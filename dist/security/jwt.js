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
    generateJwt
  });

  function generateJwt({
    userEmail,
    id
  } = {}) {
    return "JWT " + jwt.sign({
      email: userEmail,
      userId: id
    }, _environment.default.JWT_KEY, {
      expiresIn: "168h"
    });
  }
}