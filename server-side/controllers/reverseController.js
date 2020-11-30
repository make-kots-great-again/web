import {reserveService} from "../services";

export default function reserveControllerFactory() {
    return Object.freeze({
        getGroupReserveItems, postProductInReserve
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

    async function postProductInReserve(httpRequest) {

        const {groupIdBarcode} = httpRequest.params;
        const {...reserveInfo} = httpRequest.body;

        try {

            const reserve = await reserveService
                .addProductInReserve({groupIdBarcode, ...reserveInfo});

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
