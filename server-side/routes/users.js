import express from 'express'
import passport from 'passport'

import makeCallback from '../helpers/express-callback'
import controllers, { groupController, productController, userController } from '../controllers'

const router = express.Router()

/**
 * Session is set to false because we are using JWTs, and don't need a session!
 * If you do not set this to false, the passport framework will try to implement a session.
 */

router.post('/signup', makeCallback(userController.registerUser))
router.post('/login', makeCallback(userController.logInUser))
router.get('/users/profiles',
  passport.authenticate('jwt', { session: false }),
  makeCallback(userController.getAllUsers))

router.get('/user/groups',
  passport.authenticate('jwt', { session: false }),
  makeCallback(groupController.getMyGroups))

router.get('/user',
  passport.authenticate('jwt', { session: false }),
  makeCallback(userController.getOneUser))

router.put('/user',
  passport.authenticate('jwt', { session: false }),
  makeCallback(userController.putOneUser))

router.delete('/user',
  passport.authenticate('jwt', { session: false }),
  makeCallback(userController.deleteUser))

router.get('/user/:username',
  passport.authenticate('jwt', { session: false }),
  makeCallback(userController.searchUsername))

router.patch('/user/password',
  passport.authenticate('jwt', { session: false }),
  makeCallback(userController.patchUserPwd))

export { router as usersRoutes }
