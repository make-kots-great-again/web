export default function makeshoppingListRepository({ShoppingList, userGroup, Product, Op}) {
    return Object.freeze({
        findShoppingList,
    });


    async function findShoppingList() {
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
                as: 'users',
                attributes: ['userId', 'groupId']
            }]
        });
    }
}
