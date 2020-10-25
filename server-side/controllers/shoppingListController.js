import {shoppingListService} from "../services";

export default function shoppingListControllerFactory() {
    return Object.freeze({
        getShoppingList, addProductToShoppingList, getGroupShoppingList
    });

    async function getShoppingList(httpRequest) {

        const {userId} = httpRequest.user;

        try {
            const shoppingList = await shoppingListService.listMyShoppingLists({userId});

            return {
                statusCode: 200,
                body: {
                    success: true,
                    shoppingList: shoppingList
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }

    }

    async function addProductToShoppingList(httpRequest) {

        const {userId} = httpRequest.user;
        const {groupId} = httpRequest.params;
        const {...productInfo} = httpRequest.body;

        try {
            const shoppingList = await shoppingListService
                .putProductInShoppingList({groupId, userId, ...productInfo});


            if (shoppingList.message) {
                return {
                    statusCode: 404,
                    body: {success: false, message: shoppingList.message}
                }
            }

            return {
                statusCode: 200,
                body: {
                    success: true,
                    message: 'Product successfully added to the list !',
                    shoppingList: shoppingList
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }

    }


    async function getGroupShoppingList(httpRequest){

        const {groupId} = httpRequest.params;

        try {
            const shoppingList = await shoppingListService.getGroupShoppingList({groupId});

            return {
                statusCode: 200,
                body: {
                    success: true,
                    shoppingList: shoppingList
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }


    }
};
