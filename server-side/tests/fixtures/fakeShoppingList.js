export default function makeFakeShoppingList (codeBarre, quantityOfProduct) {
  const shoppingList = {
    code: codeBarre,
    quantity: quantityOfProduct
  }

  return {
    ...shoppingList
  }
}
