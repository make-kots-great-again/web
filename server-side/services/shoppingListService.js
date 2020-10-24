export default function shoppingListServiceFactory({shoppingListRepository}) {
    return Object.freeze({
        listShoppingList,
    });

    async function listShoppingList() {
        return await shoppingListRepository.findShoppingList();
    }
}
