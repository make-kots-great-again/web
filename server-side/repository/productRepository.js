import { serializeUser } from "passport";

export default function makeProductRepository({Product, Op}) {
    return Object.freeze({
        save, findAll, findByCode
    });

    async function save({...userInfo}) {
        return Product.create(userInfo);
    }

    async function findAll({productName}) {
        return Product.findAll(
            {
                where: {
                    product_name: {
                        [Op.startsWith]: productName[0].toUpperCase() + productName.slice(1),
                    }
                }, attributes: ['code', 'product_name']
            });
    }

    async function findByCode({code: code}) {
        return Product.findByPk(code);

    }

}
