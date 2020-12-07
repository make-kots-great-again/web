import express from 'express'
import passport from 'passport'

import makeCallback from '../helpers/express-callback'
import { productController } from '../controllers'
const router = express.Router()

/**
 * Session is set to false because we are using JWTs, and don't need a session!
 * If you do not set this to false, the passport framework will try to implement a session.
 */

router.get('/products/:productName',
  passport.authenticate('jwt', { session: false }),
  makeCallback(productController.getProducts))

router.get('/product/:productId',
  passport.authenticate('jwt', { session: false }),
  makeCallback(productController.getOneProduct))

export { router as productsRoutes }
