"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shoppingListRoutes = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _expressCallback = _interopRequireDefault(require("../helpers/express-callback"));

var _controllers = require("../controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

exports.shoppingListRoutes = router;

/**
 * Session is set to false because we are using JWTs, and don't need a session!
 * If you do not set this to false, the passport framework will try to implement a session.
 */
router.get("/shoppingList", _passport.default.authenticate("jwt", {
  session: false
}), (0, _expressCallback.default)(_controllers.shoppingListController.getShoppingList));
router.get("/shoppingList/:groupId", _passport.default.authenticate("jwt", {
  session: false
}), (0, _expressCallback.default)(_controllers.shoppingListController.getGroupShoppingList));
router.post("/shoppingList/addProduct/:groupId", _passport.default.authenticate("jwt", {
  session: false
}), (0, _expressCallback.default)(_controllers.shoppingListController.addProductToShoppingList));
/**
 * @api {delete} /shoppingList/removeProduct/:listId Supprime un produit d'une liste de course.
 * @apiName ShoppingList Remove Product
 * @apiGroup ShoppingList
 *
 * @apiParam {listId} id Product ID unique.
 *
 * @apiSuccess {boolean} success le statut de la requête.
 * @apiSuccess {String} message le message de retour de la requête.
 * @apiSuccess {int} nombre d'ojets restant dans la liste de course.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "success": true,
 *          "message": "Product delete from the list !",
 *          "shoppingList": 0
 *      }
 *
 * @apiError 400 erreur indéterminée venant du serveur lui-même.
 * @apiError 404 erreur due à une mauvaise utilisation du code.
 */

router.delete("/shoppingList/removeProduct/:listId", _passport.default.authenticate("jwt", {
  session: false
}), (0, _expressCallback.default)(_controllers.shoppingListController.removeProductToShoppingList));