// During the test the env variable is set to test

// bring in dev-dependencies
import chai from 'chai'
import { expect } from 'chai'
import { describe, before, it } from 'mocha'
import chaiHttp from 'chai-http'

import server from '../../../app'
import env from '../../config/environment'
import { userRepository } from '../../repository'
import { userService } from '../../services'
import makeTwoUsers from '../fixtures/make2users'
import makeFakeUser from '../fixtures/fakeUser'
import usersRbac from '../fixtures/rbacTestWith2users'

chai.use(chaiHttp)
const should = chai.should()

describe('Users', () => {
  let loginUser = ''

  const user = makeFakeUser()

  before(async () => {
    await chai.request(server)
      .post('/server/api/signup')
      .send({ ...user })

    loginUser = await chai.request(server)
      .post('/server/api/login')
      .send({ pseudo: user.username, password: user.password })
  })

  after(async () => {
    const findUser = await userRepository.findByUsername({ username: user.username })
    await userService.removeUser({ userId: findUser.dataValues.userId })
  })

  /*
     * Test the /login route
     */
  describe('/login user', () => {
    it('it should login a user', async () => {
      loginUser.status.should.be.eql(200)
      loginUser.body.user.should.have.property('token')
      expect(loginUser.body.success).to.be.true
    })

    it('it should NOT login a user with a wrong password', async () => {
      const loggedIn = await chai.request(server)
        .post('/server/api/login')
        .send({ pseudo: 'xxxxxx', password: 'xxxxxx' })

      loggedIn.status.should.be.eql(401)
      expect(loggedIn.body.success).to.be.false
      loggedIn.body.should.have.property('message').eql('Authentication failed !')
    })
  })

  /*
     * Test the /signup route
     */
  describe('/singup user', () => {
    it('it should create a new user', async () => {
      const newUser = makeFakeUser()

      const createdUser = await chai.request(server)
        .post('/server/api/signup')
        .send({ ...newUser })

      createdUser.status.should.be.eql(201)
      createdUser.body.should.have.property('personnalGroup')
      createdUser.body.should.have.property('message')
        .eql('User has been created successfully !')
      expect(createdUser.body.success).to.be.true

      await userService.removeUser({ userId: createdUser.body.user.userId })
    })

    it('it should NOT create a user if he/she already exists', async () => {
      const newUser = makeFakeUser()

      const createdUser1 = await chai.request(server)
        .post('/server/api/signup')
        .send({ ...newUser })

      const createdUser2 = await chai.request(server)
        .post('/server/api/signup')
        .send({ ...newUser })

      createdUser2.status.should.be.eql(409)
      createdUser2.body.should.have.property('message')
        .eql('A user with the same username or email already exists !')
      expect(createdUser2.body.success).to.be.false

      await userService.removeUser({ userId: createdUser1.body.user.userId })
    })
  })

  /*
     * Test the /Get all users route
     */
  describe('/GET users', () => {
    it('it should GET all users', async () => {
      const users = await chai.request(server)
        .get('/server/api/users/profiles')
        .set('Authorization', loginUser.body.user.token)

      users.status.should.be.eql(200)
      users.body.should.be.an('array')
    })

    it('it should NOT GET all user with a missing or invalid JWT', async () => {
      const users = await chai.request(server)
        .get('/server/api/users/profiles')

      const users1 = await chai.request(server)
        .get('/server/api/users/profiles')
        .set('Authorization', 'abc')

      users.status.should.be.eql(401)
      users1.status.should.be.eql(401)
      users.body.should.be.empty
      users1.body.should.be.empty
    })
  })

  /*
     * Test the /GET user route
     */
  describe('/GET user', () => {
    it('it should GET one user', async () => {
      const getUser = await chai.request(server)
        .get('/server/api/user/')
        .set('Authorization', loginUser.body.user.token)

      getUser.status.should.be.eql(200)
      getUser.body.should.have.lengthOf(1)
    })

    it('it should NOT GET a user with a missing or invalid JWT', async () => {
      const users = await chai.request(server)
        .get('/server/api/user/')

      const users1 = await chai.request(server)
        .get('/server/api/user/')
        .set('Authorization', 'abc')

      users.status.should.be.eql(401)
      users1.status.should.be.eql(401)
      users.body.should.be.empty
      users1.body.should.be.empty
    })
  })

  /*
     * Test the /PATCH/ user route
     */
  describe('/PATCH user', () => {
    it('it should PATCH a user', async () => {
      const userToUpdate = makeFakeUser()

      await chai.request(server)
        .post('/server/api/signup')
        .send({ ...userToUpdate })

      const logInUser = await chai.request(server)
        .post('/server/api/login')
        .send({ pseudo: userToUpdate.username, password: userToUpdate.password })

      const patchedUser = await chai.request(server)
        .put('/server/api/user/')
        .set('Authorization', logInUser.body.user.token)
        .send({ ...makeFakeUser({ username: 'toto123' }) })

      patchedUser.status.should.be.eql(200)
      expect(patchedUser.body.success).to.be.true
      patchedUser.body.user.should.have.property('username').eql('toto123')
      patchedUser.body.should.have.property('message')
        .eql('User info has been updated successfully !')

      await userService.removeUser({ userId: logInUser.body.user.userId })
    })

    it('it should NOT PATCH a user with a taken username', async () => {
      const userToUpdate = makeFakeUser()

      await chai.request(server)
        .post('/server/api/signup')
        .send({ ...userToUpdate })

      const user2 = await chai.request(server)
        .post('/server/api/signup')
        .send({ ...makeFakeUser() })

      const logInUser = await chai.request(server)
        .post('/server/api/login')
        .send({ pseudo: userToUpdate.username, password: userToUpdate.password })

      const patchedUser = await chai.request(server)
        .put('/server/api/user/')
        .set('Authorization', logInUser.body.user.token)
        .send({ ...makeFakeUser({ username: user2.body.user.username }) })

      patchedUser.status.should.be.eql(409)
      expect(patchedUser.body.success).to.be.false
      patchedUser.body.should.have.property('message')
        .eql('A user with the same username already exists !')

      await userService.removeUser({ userId: logInUser.body.user.userId })
      await userService.removeUser({ userId: user2.body.user.userId })
    })

    it('it should NOT PATCH a user with a missing or invalid JWT', async () => {
      const users = await chai.request(server)
        .put('/server/api/user/')

      const users1 = await chai.request(server)
        .put('/server/api/user/')
        .set('Authorization', 'abc')

      users.status.should.be.eql(401)
      users1.status.should.be.eql(401)
      users.body.should.be.empty
      users1.body.should.be.empty
    })
  })

  /*
     * Test the /DELETE route
     */
  describe('/DELETE user', () => {
    it('it should DELETE a user', async () => {
      const userToDelete = makeFakeUser()

      await chai.request(server)
        .post('/server/api/signup')
        .send({ ...userToDelete })

      const logInUser = await chai.request(server)
        .post('/server/api/login')
        .send({ pseudo: userToDelete.username, password: userToDelete.password })

      const deletedUser = await chai.request(server)
        .delete('/server/api/user/')
        .set('Authorization', logInUser.body.user.token)

      deletedUser.status.should.be.eql(200)
      deletedUser.body.should.have.property('message').eql('User deleted successfully !')
      deletedUser.body.should.have.property('removedUser').eql(1)
    })

    it('it should NOT DELETE a user with a missing or invalid JWT', async () => {
      const users = await chai.request(server)
        .delete('/server/api/user/')

      const users1 = await chai.request(server)
        .delete('/server/api/user/')
        .set('Authorization', 'abc')

      users.status.should.be.eql(401)
      users1.status.should.be.eql(401)
      users.body.should.be.empty
      users1.body.should.be.empty
    })
  })
})
