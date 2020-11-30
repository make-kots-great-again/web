import {makeReserve} from '../domain'
import {groupService, productService} from "./index";

export default function reserveServiceFactory({reserveRepository, groupRepository, productRepository}) {
    return Object.freeze({
        listGroupReserveItems, addProductInReserve
    });

    async function listGroupReserveItems({groupId}) {

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

                const findProductCode = await productService.getProductCode({code:  reserve.getProductCode()});
                if (findProductCode.message) return {message: findProductCode.message};

                return reserveRepository.save({
                    groupId: groupInfo.dataValues.groupId,
                    code: reserve.getProductCode(),
                    quantity: reserve.getProductQuantity(),
                    expiringIn: reserve.getExpiringIn(),
                    valid: reserve.getvalid(),
                });


            } else if (findItem) {

                const findProductCode = await productService.getProductCode({code:  reserve.getProductCode()});
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
}

