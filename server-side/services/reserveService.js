import {makeReserve} from '../domain'
import {groupService, productService} from "./index";

export default function reserveServiceFactory({reserveRepository}) {
    return Object.freeze({
        listGroupReserveItems, addProductInReserve, patchValidityOfAnItem, patchQuantityOfAnItem, patchQuantityAndDayOfAnItem, removeItemFromReserve
    });

    async function listGroupReserveItems({groupId}) {

        const groupInfo = await groupService.getGroup({groupId});

        if (groupInfo.message) return {
            statusCode: groupInfo.statusCode,
            message: groupInfo.message
        };

        const result = [];

        const reserve = await reserveRepository.findGroupReserveItems({groupId});

        reserve.forEach(x => {
            result.push({
                id: x.dataValues.id,
                code: x.dataValues["productInfo"].dataValues.code,
                product_name: x.dataValues["productInfo"].dataValues.product_name,
                product_brand: x.dataValues["productInfo"].dataValues.brands,
                quantity: x.dataValues.quantity,
                expiringIn: x.dataValues.expiringIn,
                valid: x.dataValues.valid,
            });
        });

        return result;
    }

    async function addProductInReserve({groupIdBarcode, ...reserveInfo}) {

        let groupInfo = {}
        const groupId = !!(groupIdBarcode.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i))
        const groupBarCode = groupIdBarcode.length === 12;

        if (groupId || groupBarCode) {

            if (groupId) {

                groupInfo = await groupService.getGroup({groupId: groupIdBarcode});
                if (groupInfo.message) return {message: groupInfo.message};

            } else if (groupBarCode) {
                groupInfo = await groupService.getGroupByBarCode({groupBarCode: groupIdBarcode});
                if (groupInfo.message) return {message: groupInfo.message};
            }

            const reserve = makeReserve({...reserveInfo});

            const findItem = await reserveRepository.findReserveItem({
                groupId: groupInfo.dataValues.groupId,
                code: reserve.getProductCode(),
            });

            if (!findItem) {

                const findProductCode = await productService.getProductCode({code: reserve.getProductCode()});
                if (findProductCode.message) return {message: findProductCode.message};

                return await reserveRepository.save({
                    groupId: groupInfo.dataValues.groupId,
                    code: reserve.getProductCode(),
                    quantity: reserve.getProductQuantity(),
                    expiringIn: reserve.getExpiringIn(),
                    valid: reserve.getvalid()
                });

            } else if (findItem) {

                const findProductCode = await productService.getProductCode({code: reserve.getProductCode()});
                if (findProductCode.message) return {message: findProductCode.message};

                return reserveRepository.updateReserve({
                    groupId: groupInfo.dataValues.groupId,
                    code: reserve.getProductCode(),
                    quantity: reserve.getProductQuantity(),
                    expiringIn: reserve.getExpiringIn(),
                    valid: reserve.getvalid(),
                });
            }
        } else {
            return {message: `No group was found with this id ${groupIdBarcode}`};
        }
    }


    //TODO : implémenter la vérification l'existance de l'item deleted
    async function patchValidityOfAnItem(validatedItem) {

        if (!validatedItem.itemId) return {message: 'You must supply the item id.'};

        if (!(validatedItem.itemId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${validatedItem.itemId} is not a valid UUID`};

        /*const findItem = await shoppingListRepository.findById({shoppingListId: itemId});

        if (!findItem)
            return {message: `No item with this id '${itemId}' was found in the shopping list !`};
        */

        return await reserveRepository.patchValidityOfAnItem(validatedItem.itemId, validatedItem.validity);
    }

    //TODO : implémenter la vérification l'existance de l'item deleted
    async function patchQuantityOfAnItem(updateInfos) {

        if (!updateInfos.itemId) return {message: 'You must supply the item id.'};

        if (!(updateInfos.itemId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${updateInfos.itemId} is not a valid UUID`};

        /*const findItem = await shoppingListRepository.findById({shoppingListId: itemId});

        if (!findItem)
            return {message: `No item with this id '${itemId}' was found in the shopping list !`};
        */

        return await reserveRepository.patchQuantityOfAnItem(updateInfos.itemId, updateInfos.quantity);
    }

    //TODO : implémenter la vérification l'existance de l'item deleted
    async function patchQuantityAndDayOfAnItem(updateInfos) {

        if (!updateInfos.itemId) return {message: 'You must supply the item id.'};

        if (!(updateInfos.itemId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${updateInfos.itemId} is not a valid UUID`};

        /*const findItem = await shoppingListRepository.findById({shoppingListId: itemId});

        if (!findItem)
            return {message: `No item with this id '${itemId}' was found in the shopping list !`};
        */

        return await reserveRepository.patchQuantityAndDayOfAnItem(updateInfos.itemId, updateInfos.quantity, updateInfos.expiringIn);
    }

    async function removeItemFromReserve(itemId) {

        if (!itemId) return {message: 'You must supply the item id.'};

        if (!(itemId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${itemId} is not a valid UUID`};

        /*const findItem = await shoppingListRepository.findById({shoppingListId: itemId});

        if (!findItem)
            return {message: `No item with this id '${itemId}' was found in the shopping list !`};
        */
        return reserveRepository.removeItemFromReserve({id: itemId});
    }
}


