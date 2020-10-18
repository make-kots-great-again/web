import express from 'express';
const router = express.Router();
import passport from 'passport'

import makeCallback from '../helpers/express-callback'
import controllers  from '../controllers'
import {groupController}  from '../controllers'

/**
 * Session is set to false because we are using JWTs, and don't need a session!
 * If you do not set this to false, the passport framework will try to implement a session.
 */

router.post("/group/create",
    passport.authenticate("jwt", {session: false}),
    makeCallback(groupController.createGroup));

router.get("/user/groups",
    passport.authenticate("jwt", {session: false}),
    makeCallback(groupController.getMyGroups));

router.get("/group/:groupId",
    passport.authenticate("jwt", {session: false}),
    makeCallback(groupController.getOneGroup));

router.patch("/group/:groupId",
    passport.authenticate("jwt", {session: false}),
    makeCallback(groupController.updateGroup));

router.get("/group/:groupId/add/:username",
    passport.authenticate("jwt", {session: false}),
    makeCallback(groupController.addMembersToGroup));

router.delete("/group/:groupId/delete/:userId",
    passport.authenticate("jwt", {session: false}),
    makeCallback(groupController.leaveGroup)); // deleteGroup

router.delete("/group/:groupId",
    passport.authenticate("jwt", {session: false}),
    makeCallback(groupController.deleteGroup));

export {router as groupsRoutes};



