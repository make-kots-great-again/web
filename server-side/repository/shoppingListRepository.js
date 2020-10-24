export default function makeshoppingListRepository({ShoppingList, userGroup, Product, Op}) {
    return Object.freeze({
        findShoppingList,
    });


    async function findShoppingList({groupId}) {
        return ShoppingList.findAll({
            attributes: ['quantity'],
            include: [
                {
                    model: Product,
                    as: 'product',
                    attributes: ['code', 'product_name']
                },
                {
                    model: userGroup,
                    as: 'owners',
                    where: {
                        groupId : groupId
                    },
                    attributes: ['userId','groupId']
                }]
        });
    }
}
