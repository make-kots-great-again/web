"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidEmail;

var _emailValidator = _interopRequireDefault(require("email-validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidEmail(email) {
  return _emailValidator.default.validate(email);
}