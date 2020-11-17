export default function makeshoppingListRepository({ShoppingList, userGroup, Product, Op}) {
    return Object.freeze({
        save, findGroupShoppingList, removeProduct, findById, findItemOwner
    });


    async function save({...productInfo}) {
        return ShoppingList.create(productInfo);
    }

    async function findGroupShoppingList({groupId}) {
        return ShoppingList.findAll({
            attributes: ['quantity', 'id', 'groupProduct'],
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

    async function findItemOwner({itemId, userId}) {
        return ShoppingList.findOne({
            where: {id: itemId},
            attributes: ['quantity', 'id', 'groupProduct'],
            include: [
                {
                    model: userGroup,
                    as: 'owners',
                    where: {userId: userId},
                    attributes: ['userId', 'groupId', 'role']
                }]
        });
    }

    async function findById({shoppingListId: id}) {
        return ShoppingList.findByPk(id);
    }

    async function removeProduct({id}) {
        return ShoppingList.destroy({where: {id: id}});
    }
}
