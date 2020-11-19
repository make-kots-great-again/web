"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeFakeAddProductShoppingList;

//TODO : a automatiser
function makeFakeAddProductShoppingList(username, groupProduct, quantity) {
  const grouProductShoppingList = {
    code: 16650,
    product_name: "Organic Penne Pasta",
    quantity: quantity,
    username: username,
    groupProduct: groupProduct,
    createdAt: "Date",
    updatedAt: "Date"
  };
  return { ...grouProductShoppingList
  };
}