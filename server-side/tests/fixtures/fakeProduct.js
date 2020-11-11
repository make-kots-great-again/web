export default function makeFakeProduct (ingredient) {
    const randomBarCode = Math.round(Math.random() * (999999999) + 100000000);
    const randomProductName = Math.random().toString(36).substr(2, 9);
    const product = {
        code: randomBarCode,
        product_name: randomProductName,
        brands: randomProductName.split("").reverse().join(""),
        ingredients: ingredient
    };

    return {
        ...product
    }
}
