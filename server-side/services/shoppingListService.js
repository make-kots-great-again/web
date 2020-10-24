import {groupService, userService} from "./index";

export default function shoppingListServiceFactory({shoppingListRepository}) {
    return Object.freeze({
        listMyShoppingLists,
    });

    async function listMyShoppingLists({userId}) {

        const findUserGroups = await groupService.listMyGroups({userId})

        if (findUserGroups.length === 0) return [];

        const {groups} = findUserGroups[0].dataValues;

        const info = [];

        for (const x of groups) {

            const index = groups.indexOf(x) + 1;

            const shoppingList = await shoppingListRepository.findShoppingList(
                {groupId: x.dataValues.groupId});

            if (shoppingList.length === 0) info.push(
                {message: `no shopping list for this group : ${x.dataValues.groupId}`});

            for (const y of shoppingList) {

                const findUsername = await userService.listOneUser(
                    {id: y.dataValues["owners"].dataValues.userId})

                info.push(
                    {
                        product_name: y.dataValues.product.dataValues.product_name,
                        quantity: y.dataValues.quantity,
                        code: y.dataValues.product.dataValues.code,
                        list: `list ${index}`,
                        username: findUsername.dataValues.username
                    })
            }
        }

        return info.filter(x => x.list !== undefined).reduce(
            (result, item) => ({
                ...result, [item['list']]: [...(result[item['list']] || []), item]
            }), {});
    }
}
