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
 * @api {delete} /reserve/item Supprime un élément de la table reserve.
 * @apiName Reserve Remove Item
 * @apiGroup Reserve
 * 
 * @apiBody {
 *               itemID: <item_to_suppress_id>          
 *          }
 *
 * @apiSuccess {boolean} success le statut de la requête.
 * @apiSuccess {Object} reserveItems l'item deleter de la table reserve.
 *                       {"id":<item_id>,"groupId":<group_id>,"code":<barcode>,"quantity":<item_quantity>,"expiringIn":<expiration_date>,
 *                         "valid":<item_validity>,"updatedAt":<last_update_date>,"createdAt":<creation_date>}
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {"success":true,
 *       "reserveItems":{"id":"228b81de-e2fe-485d-9de9-bd7b3b1c94e9","groupId":"7e0313b1-0ae6-4a99-86be-f762ec2c7e1c",
 *          "code":"18050","quantity":6,"expiringIn":5,"valid":true,"updatedAt":"2020-12-01T21:48:10.639Z",
 *          "createdAt":"2020-12-01T21:48:10.639Z"
 *        }
 *      }
 *
 * @apiError 400 erreur indéterminée venant du serveur lui-même.
 * @apiError 404 erreur due à une mauvaise utilisation du code.
 */
router.delete("/reserve/item",
    passport.authenticate("jwt", {session: false}),
    makeCallback(reserveController.removeItemFromReserve));

export {router as reserveRoutes};



