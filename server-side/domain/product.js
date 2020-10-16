export default function buildMakeProduct(requiredParameter) {
    return ({
                productName = requiredParameter('A groupName')
            } = {}) => {

        if (typeof productName !== 'string')
            throw new TypeError('A product name must be a string.');


        return Object.freeze({
            getProductName: () => productName
        });
    }
}
