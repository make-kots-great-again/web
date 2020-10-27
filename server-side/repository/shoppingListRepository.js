export default function makeshoppingListRepository({ShoppingList, userGroup, Product, Op}) {
    return Object.freeze({
        save, findShoppingList,
    });


    async function save({...productInfo}) {
        return ShoppingList.create(productInfo);
    }

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
                        groupId: groupId
                    },
                    attributes: ['userId', 'groupId', 'role']
                }]
        });
    }
}
