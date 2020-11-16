"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = productServiceFactory;

var _domain = require("../domain");

function productServiceFactory({
  productRepository
}) {
  return Object.freeze({
    listProducts
  });

  async function listProducts({
    productName
  }) {
    if (!productName) return {
      message: 'You must supply a product name.'
    };
    if (typeof productName !== 'string') return {
      message: 'A product name must be a string.'
    };
    if (productName.length === 0) return {
      message: 'A product name must have a name.'
    };
    return await productRepository.findAll({
      productName
    });
  }
}