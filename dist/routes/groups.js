"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupsRoutes = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _expressCallback = _interopRequireDefault(require("../helpers/express-callback"));

var _controllers = _interopRequireWildcard(require("../controllers"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

exports.groupsRoutes = router;

/**
 * Session is set to false because we are using JWTs, and don't need a session!
 * If you do not set this to false, the passport framework will try to implement a session.
 */
router.post("/group/create", _passport.default.authenticate("jwt", {
  session: false
}), (0, _expressCallback.default)(_controllers.groupController.createGroup));
router.get("/group/:groupId", _passport.default.authenticate("jwt", {
  session: false
}), (0, _expressCallback.default)(_controllers.groupController.getOneGroup));
router.patch("/group/:groupId", _passport.default.authenticate("jwt", {
  session: false
}), (0, _expressCallback.default)(_controllers.groupController.updateGroup));
router.get("/group/:groupId/add/:username", _passport.default.authenticate("jwt", {
  session: false
}), (0, _expressCallback.default)(_controllers.groupController.addMembersToGroup));
router.get("/group/token/:groupId", (0, _expressCallback.default)(_controllers.groupController.getGroupToken));
router.delete("/group/:groupId/delete/:userId", _passport.default.authenticate("jwt", {
  session: false
}), (0, _expressCallback.default)(_controllers.groupController.leaveGroup)); // deleteGroup

router.delete("/group/:groupId", _passport.default.authenticate("jwt", {
  session: false
}), (0, _expressCallback.default)(_controllers.groupController.deleteGroup));