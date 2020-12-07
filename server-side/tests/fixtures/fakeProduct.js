export default function makeFakeProduct (name) {
  const product = {
    productName: name
  }

  return {
    ...product
  }
}
