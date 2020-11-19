"use strict";

var _chai = require("chai");

var _mocha = require("mocha");

var _domain = require("../../../domain");

var _errors = require("../../../helpers/errors");

var _fakeProduct = _interopRequireDefault(require("../../fixtures/fakeProduct"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//During the test the env variable is set to test
process.env.NODE_ENV = 'test'; //bring in dev-dependencies

(0, _mocha.describe)('PRODUCT ENTITY', () => {
  (0, _mocha.describe)('#product', () => {
    (0, _mocha.it)('it should make a product', () => {
      const product = (0, _fakeProduct.default)("jasmin");
      const buildProduct = (0, _domain.makeProduct)({ ...product
      });
      (0, _chai.expect)(buildProduct.getProductName()).to.be.eql(product.productName);
    });
  });
  (0, _mocha.describe)('#productName', () => {
    (0, _mocha.it)('a product must have a productName', () => {
      const product = (0, _fakeProduct.default)(undefined);
      (0, _chai.expect)(() => (0, _domain.makeProduct)({ ...product
      })).to.throw(_errors.RequiredParameterError, 'A productName is a required.');
    });
    (0, _mocha.it)("a productName can't be null", () => {
      const product = (0, _fakeProduct.default)(null);
      (0, _chai.expect)(() => (0, _domain.makeProduct)({ ...product
      })).to.throw(TypeError, 'A product name must be a string.');
    });
    (0, _mocha.it)("a productName can't be a number", () => {
      const product = (0, _fakeProduct.default)(404);
      (0, _chai.expect)(() => (0, _domain.makeProduct)({ ...product
      })).to.throw(TypeError, 'A product name must be a string.');
    });
  });
});