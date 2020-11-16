
const partShoppingListPrototype = {
    constructor: function (id, quantity, id_group_user, code){
        this.id = id,
        this.quantity = quantity,
        this.id_group_user = id_group_user,
        this.code = code
    }
}



function makefakeList(...fakeProductsList){
    let shoppingList = [];

    for(let e in fakeProductsList){
        let shoppingListElement = Object.create(partShoppingListPrototype);
        shoppingListElement.constructor(e.id, Math.round(Math.random() * (8) + 1), e.id_group_user, e.code)
        shoppingList.push(shoppingListElement);
    }
    
    return shoppingList;
};

export default function makeFakeProduct (ingredient) {
    const randomBarCode = Math.round(Math.random() * (999999999) + 100000000);
    const randomProductName = Math.random().toString(36).substr(2, 9);
    
    const shoppingList = makefakeList()
    
    return {
        ...product
    }
};

/*

const shoppingListPrototype = {
    constructor: function (id, quantity, id_group_user, code){
        this.id = id,
        this.quantity = quantity,
        this.id_group_user = id_group_user,
        this.code = code
    }
}

function makeFakeList(...fakeProductsList){
    let shoppingList = [];

    for(let e in fakeProductsList){
        let shoppingListElement = Object.create(shoppingListPrototype);
        shoppingListElement.constructor(e.id, Math.round(Math.random() * (8) + 1), e.id_group_user, e.code)
        shoppingList.push(shoppingListElement);
    }
    
    return shoppingList;
};

export default function makeFakeProduct (...fakeProductsList) {

    for(let e in ingredients){

    }
    
    const shoppingList = makeFakeList(fakeProductsList);
    
    return {
        ...shoppingList
    }
};

*/ 

