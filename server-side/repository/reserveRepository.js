export default function makeReserveRepository({Reserve, Product, Group, Op}) {
    return Object.freeze({
        save, findGroupReserveItems, findReserveItem, updateReserve, patchValidityOfAnItem, patchQuantityOfAnItem, patchQuantityAndDayOfAnItem, removeItemFromReserve
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

    async function patchValidityOfAnItem(itemId, validity){

        return Reserve.update(
            {valid: validity},
            {
                where: {id: itemId}
            });
    }

    async function patchQuantityOfAnItem(itemId, quantity){

        return Reserve.update(
            {quantity: quantity},
            {
                where: {id: itemId}
            });
    }

    async function patchQuantityAndDayOfAnItem(itemId, quantity, expiringIn){

        return Reserve.update(
            {quantity: quantity, expiringIn: expiringIn},
            {
                where: {id: itemId}
            });
    }

    async function removeItemFromReserve({id}) {
        return Reserve.destroy({where: {id: id}});
    }
}
