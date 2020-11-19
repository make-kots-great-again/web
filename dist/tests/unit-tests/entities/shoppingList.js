"use strict";

var _chai = require("chai");

var _mocha = require("mocha");

var _domain = require("../../../domain");

var _errors = require("../../../helpers/errors");

var _fakeShoppingList = _interopRequireDefault(require("../../fixtures/fakeShoppingList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//During the test the env variable is set to test
process.env.NODE_ENV = 'test'; //bring in dev-dependencies

(0, _mocha.describe)('SHOPPINGLIST ENTITY', () => {
  (0, _mocha.describe)('#shoppingList', () => {
    (0, _mocha.it)('it should make a shopping list', () => {
      const shoppingList = (0, _fakeShoppingList.default)(11223344, 4);
      const buildShoppingList = (0, _domain.makeShoppingList)({ ...shoppingList
      });
      (0, _chai.expect)(buildShoppingList.getProductCode()).to.be.eql(shoppingList.code);
      (0, _chai.expect)(buildShoppingList.getProductQuantity()).to.be.eql(shoppingList.quantity);
    });
  });
  (0, _mocha.describe)('#code', () => {
    (0, _mocha.it)('a shoppingList must have a code', () => {
      const shoppingList = (0, _fakeShoppingList.default)(undefined, 4);
      (0, _chai.expect)(() => (0, _domain.makeShoppingList)({ ...shoppingList
      })).to.throw(_errors.RequiredParameterError, 'A product code is a required.');
    });
    (0, _mocha.it)("a code can't be null", () => {
      const shoppingList = (0, _fakeShoppingList.default)(null, 4);
      (0, _chai.expect)(() => (0, _domain.makeShoppingList)({ ...shoppingList
      })).to.throw(TypeError, 'A product code must be a number.');
    });
    (0, _mocha.it)("a code can't be a string", () => {
      const shoppingList = (0, _fakeShoppingList.default)("404", 4);
      (0, _chai.expect)(() => (0, _domain.makeShoppingList)({ ...shoppingList
      })).to.throw(TypeError, 'A product code must be a number');
    });
  });
  (0, _mocha.describe)('#quantity', () => {
    (0, _mocha.it)('a shoppingList must have a quantity', () => {
      const shoppingList = (0, _fakeShoppingList.default)(11223344, undefined);
      (0, _chai.expect)(() => (0, _domain.makeShoppingList)({ ...shoppingList
      })).to.throw(_errors.RequiredParameterError, 'A product quantity is a required.');
    });
    (0, _mocha.it)("a quantity can't be null", () => {
      const shoppingList = (0, _fakeShoppingList.default)(11223344, null);
      (0, _chai.expect)(() => (0, _domain.makeShoppingList)({ ...shoppingList
      })).to.throw(TypeError, "A product's quantity must be a number.");
    });
    (0, _mocha.it)("a quantity can't be a string", () => {
      const shoppingList = (0, _fakeShoppingList.default)(11223344, "404");
      (0, _chai.expect)(() => (0, _domain.makeShoppingList)({ ...shoppingList
      })).to.throw(TypeError, "A product's quantity must be a number.");
    });
    (0, _mocha.it)("a quantity can't be to big", () => {
      const shoppingList = (0, _fakeShoppingList.default)(11223344, 22);
      (0, _chai.expect)(() => (0, _domain.makeShoppingList)({ ...shoppingList
      })).to.throw(RangeError, "A product's quantity must be between 1 and 20.");
    });
    (0, _mocha.it)("a quantity can't be small than 1", () => {
      const shoppingList = (0, _fakeShoppingList.default)(11223344, 0);
      (0, _chai.expect)(() => (0, _domain.makeShoppingList)({ ...shoppingList
      })).to.throw(RangeError, "A product's quantity must be between 1 and 20.");
    });
  });
});