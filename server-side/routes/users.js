import express from 'express';
const router = express.Router();
import passport from 'passport'

import makeCallback from '../helpers/express-callback'
import controllers  from '../controllers'
import {userController}  from '../controllers'

/**
 * Session is set to false because we are using JWTs, and don't need a session!
 * If you do not set this to false, the passport framework will try to implement a session.
 */

router.post("/signup", makeCallback(userController.registerUser));
router.get("/users/profiles",
    makeCallback(userController.getAllUsers));

export {router as usersRoutes};



