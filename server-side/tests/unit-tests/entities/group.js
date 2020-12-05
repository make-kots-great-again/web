// bring in dev-dependencies
import { expect } from 'chai'
import { describe, it } from 'mocha'

import { makeGroup } from '../../../domain'
import { RequiredParameterError } from '../../../helpers/errors'
import makeFakeGroup from '../../fixtures/fakeGroup'

describe('GROUP ENTITY', () => {
  describe('#group', () => {
    it('it should make a group', () => {
      const randomGroup = Math.random().toString(36).substr(2, 9)

      const group = makeFakeGroup(randomGroup, randomGroup + randomGroup)
      const buildGroup = makeGroup({ ...group })

      expect(buildGroup.getGroupName()).to.be.eql(group.groupName)
      expect(buildGroup.getGroupDescription()).to.be.eql(group.groupDescription)
    })
  })

  describe('#groupName', () => {
    it('a group must have a groupName', () => {
      const group = makeFakeGroup(undefined, 'test')

      expect(() => makeGroup({ ...group }))
        .to.throw(RequiredParameterError, 'A groupName is a required.')
    })

    it('a groupName can\'t be null', () => {
      const group = makeFakeGroup(null, 'test')

      expect(() => makeGroup({ ...group }))
        .to.throw(TypeError, 'A groupName must be a string.')
    })

    it('a groupName can\'t be a number', () => {
      const group = makeFakeGroup(404, 'test')

      expect(() => makeGroup({ ...group }))
        .to.throw(TypeError, 'A groupName must be a string.')
    })
  })

  describe('#groupDescription', () => {
    it('a group must have a groupDescription', () => {
      const group = makeFakeGroup('test', undefined)

      expect(() => makeGroup({ ...group }))
        .to.throw(RequiredParameterError, 'A group description is a required.')
    })

    it('a groupDescription can\'t be null', () => {
      const group = makeFakeGroup('test', null)

      expect(() => makeGroup({ ...group }))
        .to.throw(TypeError, 'A group description must be a string.')
    })

    it('a groupDescription can\'t be a number', () => {
      const group = makeFakeGroup('test', 404)

      expect(() => makeGroup({ ...group }))
        .to.throw(TypeError, 'A group description must be a string.')
    })
  })
})
