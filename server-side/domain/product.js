export default function buildMakeProduct (requiredParameter) {
  return ({
    productName = requiredParameter('A productName'),
    half_peremption_date = 7
  } = {}) => {
    if (typeof productName !== 'string') throw new TypeError('A product name must be a string.')
    if (typeof half_peremption_date !== 'number') throw new TypeError('A half_peremption_date must be a number.')

    return Object.freeze({
      getProductName: () => productName,
      getHalf_peremption_date: () => half_peremption_date
    })
  }
}
