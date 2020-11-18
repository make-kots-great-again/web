import controllers from ".";
import {shoppingListService} from "../services";

export default function shoppingListControllerFactory() {
    return Object.freeze({
        getShoppingList, addProductToShoppingList, removeProductToShoppingList, getGroupShoppingList
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

    async function removeProductToShoppingList(httpRequest) {

        const {listId} = httpRequest.params;

        console.log("in controllers : " + listId);

        try {
            const shoppingList = await shoppingListService
                .removeProductFromShoppingList({listId});


            if (shoppingList.message) {
                return {
                    statusCode: 404,
                    body: {success: false, message: shoppingList.message}
                }
            }

            if (shoppingList == 0){
                return {
                    statusCode: 400,
                    body: {success: false, message: "this product doesn't exist in the shopping list"}
                }
            }

            return {
                statusCode: 200,
                body: {
                    success: true,
                    message: 'Product delete from the list !',
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
