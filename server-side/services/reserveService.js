export default function reserveServiceFactory({reserveRepository}) {
    return Object.freeze({
        listGroupReserveItems
    });

    async function listGroupReserveItems({groupId}) {

        const result = [];

        const reserve = await reserveRepository.findGroupReserveItems({groupId});

        reserve.forEach(x => {
            result.push({
                id: x.dataValues.id,
                code: x.dataValues["productInfo"].dataValues.code,
                product_name: x.dataValues["productInfo"].dataValues.product_name,
                product_brand: x.dataValues["productInfo"].dataValues.brands,
                quantity: x.dataValues.quantity,
                expiringIn: x.dataValues.expiringIn,
                valid: x.dataValues.valid,
            });
        });

        return result;
    }
}
