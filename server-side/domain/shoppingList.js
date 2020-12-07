export default function buildMakeShoppingList (requiredParameter) {
  return ({
    code = requiredParameter('A product code'),
    quantity = requiredParameter('A product quantity'),
    groupProduct = false,
    productNote = null
  } = {}) => {
    if (typeof code !== 'number') throw new TypeError('A product code must be a number.')

    if (typeof quantity !== 'number') { throw new TypeError('A product\'s quantity must be a number.') }

    if (quantity < 1 || quantity > 20) { throw new RangeError('A product\'s quantity must be between 1 and 20.') }

    if (typeof groupProduct !== 'boolean') { throw new TypeError('A groupProduct must be a boolean.') }

    return Object.freeze({
      getProductCode: () => code,
      getProductQuantity: () => quantity,
      getgroupProduct: () => groupProduct,
      getproductNote: () => productNote
    })
  }
}
