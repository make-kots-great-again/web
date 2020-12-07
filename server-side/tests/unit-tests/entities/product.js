// bring in dev-dependencies
import { expect } from 'chai'
import { describe, it } from 'mocha'

import { makeProduct } from '../../../domain'
import { RequiredParameterError } from '../../../helpers/errors'
import makeFakeProduct from '../../fixtures/fakeProduct'

describe('PRODUCT ENTITY', () => {
  describe('#product', () => {
    it('it should make a product', () => {
      const product = makeFakeProduct('jasmin')
      const buildProduct = makeProduct({ ...product })

      expect(buildProduct.getProductName()).to.be.eql(product.productName)
    })
  })

  describe('#productName', () => {
    it('a product must have a productName', () => {
      const product = makeFakeProduct(undefined)

      expect(() => makeProduct({ ...product }))
        .to.throw(RequiredParameterError, 'A productName is a required.')
    })

    it('a productName can\'t be null', () => {
      const product = makeFakeProduct(null)

      expect(() => makeProduct({ ...product }))
        .to.throw(TypeError, 'A product name must be a string.')
    })

    it('a productName can\'t be a number', () => {
      const product = makeFakeProduct(404)

      expect(() => makeProduct({ ...product }))
        .to.throw(TypeError, 'A product name must be a string.')
    })
  })
})
