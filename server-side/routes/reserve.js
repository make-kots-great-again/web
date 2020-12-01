import express from 'express';
const router = express.Router();
import passport from 'passport'

import makeCallback from '../helpers/express-callback'
import {reserveController}  from '../controllers'

/**
 * Session is set to false because we are using JWTs, and don't need a session!
 * If you do not set this to false, the passport framework will try to implement a session.
 */

router.get("/reserve/items/:groupId",
    passport.authenticate("jwt", {session: false}),
    makeCallback(reserveController.getGroupReserveItems));

router.post("/reserve/:groupIdBarcode",
    passport.authenticate("jwt", {session: false}),
    makeCallback(reserveController.postProductInReserve));

/**
 * @api {delete} /shoppingList/removeProduct/:itemId Supprime un produit d'une liste de course.
 * @apiName ShoppingList Remove Product
 * @apiGroup ShoppingList
 *
 * @apiParam {itemId} id Product ID unique.
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
router.delete("/reserve/item",
    passport.authenticate("jwt", {session: false}),
    makeCallback(reserveController.removeItemFromReserve));

export {router as reserveRoutes};



