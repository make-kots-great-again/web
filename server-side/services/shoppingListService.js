import {groupService} from "./index";

export default function shoppingListServiceFactory({shoppingListRepository}) {
    return Object.freeze({
        listShoppingList,
    });

    async function listShoppingList() {

        const t = await groupService.listMyGroups(
            {userId : '3082831d-07fb-4562-8757-4273a56f666f'})

        const {groups} = t[0].dataValues

        groups.forEach(x => console.log(x.dataValues.groupId))

        return await shoppingListRepository.findShoppingList();
    }
}
