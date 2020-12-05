// bring in dev-dependencies
import { expect } from 'chai'
import { describe, it } from 'mocha'

import makeFakeUser from '../../fixtures/fakeUser'
import { makeUser } from '../../../domain'
import { RequiredParameterError } from '../../../helpers/errors'

describe('USER ENTITY', () => {
  describe('#user', () => {
    it('it should make a user', () => {
      const user = makeFakeUser()
      const buildUser = makeUser({ ...user })
      expect(buildUser.getFirstName()).to.be.eql(user.firstName)
      expect(buildUser.getLastName()).to.be.eql(user.lastName)
      expect(buildUser.getUsername()).to.be.eql(user.username)
      expect(buildUser.getEmail()).to.be.eql(user.email)
      expect(buildUser.getPassword()).not.to.be.eql(user.password)
    })
  })

  describe('#username', () => {
    it('a user must have a username', () => {
      const user = makeFakeUser({ username: undefined })
      expect(() => makeUser({ ...user }))
        .to.throw(RequiredParameterError, 'A username is a required.')
    })

    it('a username can\'t be null', () => {
      const user = makeFakeUser({ username: null })
      expect(() => makeUser({ ...user }))
        .to.throw(TypeError, 'A username must be a string.')
    })

    it('a username can\'t be a number', () => {
      const user = makeFakeUser({ username: 123 })
      expect(() => makeUser({ ...user }))
        .to.throw(TypeError, 'A username must be a string.')
    })

    it('a username max length must be 32', () => {
      const user = makeFakeUser({ username: 'abc'.repeat(35) })
      expect(() => makeUser({ ...user }))
        .to.throw(RangeError, 'A username length must be between 4 and 32.')
    })

    it('a username min length must be 4', () => {
      const user = makeFakeUser({ username: 'ab' })
      expect(() => makeUser({ ...user }))
        .to.throw(RangeError, 'A username length must be between 4 and 32.')
    })
  })

  describe('#email', () => {
    it('a user must have an email', () => {
      const user = makeFakeUser({ email: undefined })
      expect(() => makeUser({ ...user }))
        .to.throw(RequiredParameterError, 'An email is a required.')
    })

    it('an email must be a valid email', () => {
      const user = makeFakeUser({ email: 'dangamil.com' })
      expect(() => makeUser({ ...user }))
        .to.throw(SyntaxError, 'Invalid email.')
    })

    it('an email can\'t be null', () => {
      const user = makeFakeUser({ email: null })
      expect(() => makeUser({ ...user }))
        .to.throw(SyntaxError, 'An email must be of type string.')
    })

    it('an email can\'t be a number', () => {
      const user = makeFakeUser({ email: 123 })
      expect(() => makeUser({ ...user }))
        .to.throw(SyntaxError, 'An email must be of type string.')
    })
  })

  describe('#password', () => {
    it('a user must a have password', () => {
      const user = makeFakeUser({ password: undefined })
      expect(() => makeUser({ ...user }))
        .to.throw(RequiredParameterError, 'A password is a required.')
    })

    it('can hash password', () => {
      const user = makeFakeUser()
      const password = makeUser({ ...user }).getPassword()
      expect(password.match(/^\$2[aby]?\$\d{1,2}\$[.\/A-Za-z0-9]{53}$/)).to.not.be.null
    })

    it('a password can\'t be a null', () => {
      const user = makeFakeUser({ password: null })
      expect(() => makeUser({ ...user }))
        .to.throw(TypeError, 'The password must be of type string.')
    })

    it('a password can\'t be a number', () => {
      const user = makeFakeUser({ password: 123 })
      expect(() => makeUser({ ...user }))
        .to.throw(TypeError, 'The password must be of type string.')
    })
  })
})
