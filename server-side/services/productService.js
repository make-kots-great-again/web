export default function productServiceFactory({productRepository}) {
    return Object.freeze({
        listProducts, getOneProduct, getProductCode
    });

    async function listProducts({productName}) {

        if (!productName) return {message: 'You must supply a product name.'};

        if (typeof productName !== 'string')
            return {message: 'A product name must be a string.'};

        if (productName.length === 0)
            return {message: 'A product name must have a name.'};

        return await productRepository.findAll({productName});

    }

    async function getOneProduct({productId}) {

        if (!productId) return {message: 'You must supply a product ID (bar-code).'};

        if (typeof productId !== 'string')
            return {message: 'A product ID must be a string.'};

        const prod = await productRepository.findByCode({code: productId});

        if (prod == null)
            return {message: `No product found with ID : ${productId}`};

        return prod

    }
    async function getProductCode({code}) {

        const findProductCode = await productRepository.findByCode({code});

        if (!findProductCode) return {statusCode: 400, message: `No product was found with this code ${code}`};

        return findProductCode.dataValues;
    }

}
