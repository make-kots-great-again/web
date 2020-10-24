import {shoppingListService} from "../services";

export default function shoppingListControllerFactory() {
    return Object.freeze({
        getShoppingList
    });

    async function getShoppingList(httpRequest) {

        try {
            const shoppingList = await shoppingListService.listShoppingList();

            return {
                statusCode: 200,
                body: {
                    success: true,
                    shoppingList: [...shoppingList]
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }

    }
};
