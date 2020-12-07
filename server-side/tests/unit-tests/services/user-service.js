// import server to bring in everything together
// import server from "../../../../app";

// bring in dev-dependencies
import { expect } from 'chai'
import { describe, it } from 'mocha'

import makeFakeUser from '../../fixtures/fakeUser'
import { makeUser } from '../../../domain'
import { userService } from '../../../services'
import dbConnection from '../../../config/database'
import User from '../../../models/users'

describe('USER SERVICE', async () => {
  describe('#register-user', () => {
    it('inserts a user in the database', async () => {
      const { ...fakeUser } = makeFakeUser()
      const inserted = await userService.addUser({ ...fakeUser })
      fakeUser.password = inserted.password
      fakeUser.userId = inserted.userId
      expect(inserted).to.deep.include(fakeUser)

      await userService.removeUser({ userId: inserted.userId })
    })

    it('can\'t register a user if he/she already exists', async () => {
      const { ...fakeUser } = makeFakeUser()
      const firstUser = await userService.addUser({ ...fakeUser })
      const secondtUser = await userService.addUser({ ...fakeUser })

      expect(secondtUser.message).to
        .equal('A user with the same username or email already exists !')

      await userService.removeUser({ userId: firstUser.userId })
    })
  })

  describe('#login-user', () => {
    it('can authenticate a user', async () => {
      const { ...fakeUser } = makeFakeUser()

      const createdUser = await userService.addUser({ ...fakeUser })

      const loggedInUser = await userService.logInUser(
        { pseudo: fakeUser.username, password: fakeUser.password })

      expect(loggedInUser).to.have.property('token')
      expect(loggedInUser.data.username).to.equal(fakeUser.username)

      await userService.removeUser({ userId: createdUser.userId })
    })

    it('must include an pseudo', async () => {
      const loggedInUser = await userService.logInUser(
        { pseudo: undefined, password: '123' })
      expect(loggedInUser.message).to.equal('You must supply a pseudo.')
    })

    it('must include an password', async () => {
      const loggedInUser = await userService.logInUser(
        { pseudo: '12345', password: undefined })
      expect(loggedInUser.message).to.equal('You must supply a password.')
    })

    it('can\'t authenticate unregistered user', async () => {
      const loggedInUser = await userService.logInUser(
        { pseudo: '*******', password: '*******' })
      expect(loggedInUser.message).to.equal('Authentication failed !')
    })

    it('can\'t authenticate a user with a wrong password user', async () => {
      const { ...fakeUser } = makeFakeUser()

      const createdUser = await userService.addUser({ ...fakeUser })

      const loggedInUser = await userService.logInUser(
        { pseudo: fakeUser.username, password: '*******' })

      expect(loggedInUser.message).to.equal('Authentication failed !')

      await userService.removeUser({ userId: createdUser.userId })
    })
  })

  describe('#list-users', () => {

  })

  describe('#list-one-user', () => {
    it('find user by id', async () => {
      const { ...fakeUser } = makeFakeUser()
      const inserted = await userService.addUser({ ...fakeUser })
      fakeUser.userId = inserted.userId

      const listedOneUser = await userService.listOneUser({ id: fakeUser.userId })
      expect(listedOneUser.dataValues.username).to.equal(fakeUser.username)
      expect(listedOneUser.dataValues.firstName).to.equal(fakeUser.firstName)
      expect(listedOneUser.dataValues.lastName).to.equal(fakeUser.lastName)
      expect(listedOneUser.dataValues.email).to.equal(fakeUser.email)

      await userService.removeUser({ userId: inserted.userId })
    })
  })

  describe('#update-one-user', () => {
    it('update one user with userId', async () => {
      const inserted = await userService.addUser({ ...makeFakeUser() })

      const updatedInfo = makeFakeUser({ username: 'test' })

      const updatedUser = await userService
        .putUser({ userId: inserted.userId, ...updatedInfo })

      expect(updatedUser[1].dataValues.username).to.equal(updatedInfo.username)

      await userService.removeUser({ userId: inserted.userId })
    })

    it('can not update a user with an existing username or email', async () => {
      const user1 = await userService.addUser({ ...makeFakeUser() })
      const user2 = await userService.addUser({ ...makeFakeUser() })

      const updatedInfo = makeFakeUser({ username: user2.username })

      const updatedUser1 = await userService
        .putUser({ userId: user1.userId, ...updatedInfo })

      expect(updatedUser1.message).to.equal('A user with the same username already exists !')

      await userService.removeUser({ userId: user1.userId })
      await userService.removeUser({ userId: user2.userId })
    })
  })

  describe('#remove-user', () => {

  })
})
