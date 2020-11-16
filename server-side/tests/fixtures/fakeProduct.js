export default function makeFakeProduct (name) {
   
    const product = {
        productName: name, 
    };

    return {
        ...product
    }
}

/*export default function makeFakeProduct (ingredient, product_name) {
   
    const randomBarCode = Math.round(Math.random() * (999999999) + 100000000);
    const randomProductName = Math.random().toString(36).substr(2, 9);
   
    const product = {
        code: randomBarCode,
        product_name: product_name,
        brands: randomProductName.split("").reverse().join(""),
        ingredients: ingredient
    };

    return {
        ...product
    }
}*/
