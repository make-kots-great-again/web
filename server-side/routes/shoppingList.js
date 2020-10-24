import express from 'express';
const router = express.Router();
import passport from 'passport'

import makeCallback from '../helpers/express-callback'
import {shoppingListController}  from '../controllers'

/**
 * Session is set to false because we are using JWTs, and don't need a session!
 * If you do not set this to false, the passport framework will try to implement a session.
 */

router.get("/shoppingList",
    passport.authenticate("jwt", {session: false}),
    makeCallback(shoppingListController.getShoppingList));


export {router as shoppingListRoutes};



