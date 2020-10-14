"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "authenticateUser", {
  enumerable: true,
  get: function () {
    return _passport.default;
  }
});
exports.jwtFactory = exports.passwordFactory = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _crypto = _interopRequireDefault(require("crypto"));

var _password = _interopRequireDefault(require("./password"));

var _passport = _interopRequireDefault(require("./passport"));

var _jwt = _interopRequireDefault(require("./jwt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const passwordFactory = (0, _password.default)({
  bcrypt: _bcrypt.default
});
exports.passwordFactory = passwordFactory;
const jwtFactory = (0, _jwt.default)({
  jwt: _jsonwebtoken.default
});
exports.jwtFactory = jwtFactory;