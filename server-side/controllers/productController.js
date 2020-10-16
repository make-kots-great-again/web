import {productService} from "../services";

export default function productControllerFactory() {
    return Object.freeze({
        getProducts
    });

    async function getProducts(httpRequest) {

        const {productName} = httpRequest.params;

        try {
            const products = await productService.listProducts({productName});

            if (products.message)
                return {statusCode: 404, body: {success: false, message: products.message}}

            return {
                statusCode: 200,
                body: {
                    success: true,
                    products: [...products]
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }

    }
};
