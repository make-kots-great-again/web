export default function makeFakeShoppingList(codeBarre, quantityOfProduct) {
   
    const shoppingList = {
        code: codeBarre,
        quantity: quantityOfProduct
    };

    return {
        ...shoppingList
    }
}

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

