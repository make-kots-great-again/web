import { productService } from '../services'

export default function productControllerFactory () {
  return Object.freeze({
    getProducts, getOneProduct
  })

  async function getProducts (httpRequest) {
    const { productName } = httpRequest.params

    try {
      const products = await productService.listProducts({ productName })

      if (products.message) { return { statusCode: 404, body: { success: false, message: products.message } } }

      return {
        statusCode: 200,
        body: {
          success: true,
          products: [...products]
        }
      }
    } catch (e) {
      console.log(e)
      return { statusCode: 400, body: { error: e.message } }
    }
  }

  async function getOneProduct (httpRequest) {
    const { productId } = httpRequest.params

    try {
      const product = await productService.getProductCode({ code: productId })

      if (product.message) {
        return {
          statusCode: (product.statusCode) ? product.statusCode : 404,
          body: { success: false, message: product.message }
        }
      }

      return {
        statusCode: 200,
        body: {
          success: true,
          productInfo: product
        }
      }
    } catch (e) {
      console.log(e)
      return { statusCode: 400, body: { error: e.message } }
    }
  }
};
