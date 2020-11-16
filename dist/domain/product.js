"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMakeProduct;

function buildMakeProduct(requiredParameter) {
  return ({
    productName = requiredParameter('A groupName')
  } = {}) => {
    if (typeof productName !== 'string') throw new TypeError('A product name must be a string.');
    return Object.freeze({
      getProductName: () => productName
    });
  };
}