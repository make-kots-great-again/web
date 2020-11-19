"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productsRoutes = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _expressCallback = _interopRequireDefault(require("../helpers/express-callback"));

var _controllers = require("../controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

exports.productsRoutes = router;

/**
 * Session is set to false because we are using JWTs, and don't need a session!
 * If you do not set this to false, the passport framework will try to implement a session.
 */
router.get("/products/:productName", _passport.default.authenticate("jwt", {
  session: false
}), (0, _expressCallback.default)(_controllers.productController.getProducts));