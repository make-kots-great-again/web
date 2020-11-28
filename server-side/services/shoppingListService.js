import {makeShoppingList} from '../domain'
import {groupService, userService, reserveService} from "./index";

export default function shoppingListServiceFactory({shoppingListRepository, productRepository}) {
    return Object.freeze({
        listMyShoppingLists, putProductInShoppingList, removeProductFromShoppingList,
        getGroupShoppingList, editItemQuantity
    });

    async function listMyShoppingLists({userId}) {

        if (!userId) return {message: 'You must supply a user id.'};

        const findUserGroups = await groupService.listMyGroups({userId});

        if (findUserGroups.length === 0) return [];

        const {groups} = findUserGroups[0].dataValues;

        const info = [];

        for (const x of groups) {

            const shoppingList = await shoppingListRepository.findGroupShoppingList(
                {groupId: x.dataValues.groupId});

            if (shoppingList.length === 0) info.push(
                {message: `No shopping list for this group : ${x.dataValues.groupId}`});

            for (const y of shoppingList) {

                const findUsername = await userService.listOneUser(
                    {id: y.dataValues["owners"].dataValues.userId});

                const findGroupName = await groupService.getGroup(
                    {groupId: x.dataValues.groupId});

                info.push(
                    {
                        code: y.dataValues.product.dataValues.code,
                        product_name: y.dataValues.product.dataValues.product_name,
                        product_brand: y.dataValues.product.dataValues.brands,
                        quantity: y.dataValues.quantity,
                        groupId: x.dataValues.groupId,
                        shoppingListId: y.dataValues.id,
                        groupProduct: y.dataValues.groupProduct,
                        username: (y.dataValues.groupProduct) ? 'group' : findUsername.dataValues.username,
                        list: (y.dataValues["owners"].dataValues.role !== 'personal') ?
                            `list - ${findGroupName.dataValues.groupName}` :
                            findGroupName.dataValues.groupName
                    });
            }
        }

        return info
            .filter(x => !!x.list)
            .reduce((result, item) => ({
                ...result, [item['list']]: [...(result[item['list']] || []), item]
            }), {});
    }

    async function putProductInShoppingList({groupId, userId, ...productInfo}) {

        if (!groupId) return {message: 'You must supply a group id.'};

        if (!(groupId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${groupId} is not a valid UUID`};

        const findGroup = await groupService.getIdGroupUser({
            groupId: groupId,
            userId: userId
        });

        if (findGroup.message) return {message: findGroup.message};

        const findUser = await userService.listOneUser({id: userId});

        const findList = await getGroupShoppingList({groupId: groupId});

        const existingProduct = findList.find(x =>
            x.code === productInfo.code && x.username === findUser.dataValues.username);

        if (existingProduct)
            return {
                statusCode: 409,
                message: `You have already added ${existingProduct.product_name} to this list !`
            };

        const product = makeShoppingList({...productInfo});

        const findProductCode = await productRepository.findByCode({code: product.getProductCode()});

        if (!findProductCode)
            return {
                statusCode: 400,
                message: `No product was found with this code ${product.getProductCode()}`
            };

        return await shoppingListRepository.save({
            id_group_user: findGroup.dataValues.id_group_user,
            code: product.getProductCode(),
            quantity: product.getProductQuantity(),
            groupProduct: product.getgroupProduct()
        });
    }

    async function removeProductFromShoppingList({itemId, userId}) {

        if (!itemId) return {message: 'You must supply the item id.'};

        if (!(itemId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${itemId} is not a valid UUID`};

        const findItem = await shoppingListRepository.findById({shoppingListId: itemId});

        if (!findItem)
            return {message: `No item with this id '${itemId}' was found in the shopping list !`};

        const findItemUser = await shoppingListRepository.findItemOwner({itemId, userId});

        if (!findItemUser) return {
            statusCode: 403,
            message: `Unfortunately you don't own this item.`
        };

        return await shoppingListRepository.removeProduct({id: itemId});
    }

    async function getGroupShoppingList({groupId}) {

        if (!(groupId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {message: `${groupId} is not a valid UUID`};

        const groupInfo = await groupService.getGroup({groupId});

        if (groupInfo.message) return {message: groupInfo.message};

        const result = [];

        const shoppingList = await shoppingListRepository
            .findGroupShoppingList({groupId: groupId});

        for (const y of shoppingList) {

            const findUsername = await userService.listOneUser(
                {id: y.dataValues["owners"].dataValues.userId})

            result.push(
                {
                    id: y.dataValues.id,
                    code: y.dataValues.product.dataValues.code,
                    product_name: y.dataValues.product.dataValues.product_name,
                    quantity: y.dataValues.quantity,
                    groupProduct: y.dataValues.groupProduct,
                    username: findUsername.dataValues.username
                });
        }

        return result;
    }


    async function editItemQuantity({itemId, userId, quantity}) {

        if (!itemId) return {message: 'You must supply a listProduct id.'};
        if (!quantity) return {message: 'You must supply a quantity.'};

        if (!(itemId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)))
            return {statusCode: 400, message: `${itemId} is not a valid UUID`};

        const findItem = await shoppingListRepository.findById({shoppingListId: itemId});

        if (!findItem) return {message: `No item with this id '${itemId}' was found in the shopping list !`};

        const findItemUser = await shoppingListRepository.findItemOwner({itemId, userId});

        if (!findItemUser) return {
            statusCode: 403,
            message: `Unfortunately you don't own this item.`
        };

        if (typeof quantity !== 'number') return {message: "A product's quantity must be a number."};

        if (quantity < 1 || quantity > 20) return {message: "A product's quantity must be between 1 and 20."};

        return await shoppingListRepository.updateQuantity({itemId, quantity});
    }
}
