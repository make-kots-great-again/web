export default function makeReserveRepository({Reserve, Product, Group, Op}) {
    return Object.freeze({
        save, findGroupReserveItems, findReserveItem, updateReserve
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

    async function findReserveItem({groupId, code}) {
        return Reserve.findOne({
            where: {
                [Op.and]: [
                    {groupId: groupId}, {code: code}
                ]
            }
        });
    }

    async function updateReserve({groupId, code, ...reserveInfo}) {
        return Reserve.update(
            {...reserveInfo},
            {
                where: {
                    [Op.and]: [
                        {groupId: groupId}, {code: code}
                    ]
                }
            });
    }

}
