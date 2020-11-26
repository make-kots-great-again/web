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


export {router as reserveRoutes};



