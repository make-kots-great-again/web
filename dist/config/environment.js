"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//require('custom-env').env('dev')
_dotenv.default.config();

const env = Object.freeze({ ...process.env
});
var _default = env;
exports.default = _default;