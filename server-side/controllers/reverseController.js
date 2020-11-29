import {reserveService} from "../services";

export default function reserveControllerFactory() {
    return Object.freeze({
        getGroupReserveItems,
    });

    async function getGroupReserveItems(httpRequest) {

        const {groupId} = httpRequest.params;

        try {

            const reserve = await reserveService.listGroupReserveItems({groupId});

            return {
                statusCode: 200,
                body: {
                    success: true,
                    reserveItems: reserve
                }
            }
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }

    }

};
