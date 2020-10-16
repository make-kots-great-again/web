export default function makeProductRepository({Product, Op}) {
    return Object.freeze({
        save, findAll,
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

}

