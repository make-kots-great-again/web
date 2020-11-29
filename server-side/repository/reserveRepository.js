export default function makeReserveRepository({Reserve, Product, Group}) {
    return Object.freeze({
        save, findGroupReserveItems
    });


    async function save({...reserveInfo}) {
        return Reserve.create(reserveInfo);
    }

    async function findGroupReserveItems({groupId}) {
        return Reserve.findAll({
            attributes: ['id', 'quantity', 'valid', 'expiringIn'],
            include: [
                {
                    model: Product,
                    as: 'productInfo',
                    attributes: ['code', 'product_name', 'brands']
                },
                {
                    model: Group,
                    as: 'owners',
                    where: {groupId: groupId},
                    attributes: ['groupId', 'groupName']
                }]
        });
    }

}
