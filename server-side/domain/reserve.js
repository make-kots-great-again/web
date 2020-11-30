export default function buildMakeReserve(requiredParameter) {
    return ({
                code = requiredParameter('A product code'),
                quantity = requiredParameter('A product quantity'),
                expiringIn = 5,
                valid = false
            } = {}) => {

        if (typeof code !== 'number') throw new TypeError('A product code must be a number.');

        if (typeof expiringIn !== 'number') throw new TypeError('expiringIn must be a number.');

        if (typeof quantity !== 'number') throw new TypeError("A product's quantity must be a number.");

        if (quantity < 1 || quantity > 20) throw new RangeError("A product's quantity must be between 1 and 20.");

        if (typeof valid !== 'boolean') throw new TypeError("valid must be a boolean.");

        return Object.freeze({
            getProductCode: () => code,
            getProductQuantity: () => quantity,
            getExpiringIn: () => expiringIn,
            getvalid: () => valid,
        });
    }
}