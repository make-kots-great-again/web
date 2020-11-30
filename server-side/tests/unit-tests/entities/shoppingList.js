//bring in dev-dependencies
import {expect} from 'chai';
import {describe, it} from 'mocha';


import {makeShoppingList} from '../../../domain'
import {RequiredParameterError} from "../../../helpers/errors"
import makeFakeShoppingList from '../../fixtures/fakeShoppingList';


describe('SHOPPINGLIST ENTITY', () => {

    describe('#shoppingList', () => {

        it('it should make a shopping list', () => {
            
            const shoppingList = makeFakeShoppingList(11223344, 4);
            const buildShoppingList = makeShoppingList({...shoppingList});
            
            expect(buildShoppingList.getProductCode()).to.be.eql(shoppingList.code);
            expect(buildShoppingList.getProductQuantity()).to.be.eql(shoppingList.quantity);
        });
    });

    describe('#code', () => {

        it('a shoppingList must have a code', () => {
            
            const shoppingList = makeFakeShoppingList(undefined, 4);
            
            expect(() => makeShoppingList({...shoppingList}))
                .to.throw(RequiredParameterError, 'A product code is a required.');
        });

        it("a code can't be null", () => {
            
            const shoppingList = makeFakeShoppingList(null, 4);
            
            expect(() => makeShoppingList({...shoppingList}))
                .to.throw(TypeError, 'A product code must be a number.');
        });

        it("a code can't be a string", () => {
            
            const shoppingList = makeFakeShoppingList("404", 4);
            
            expect(() => makeShoppingList({...shoppingList}))
                .to.throw(TypeError, 'A product code must be a number');
        });
    });

    describe('#quantity', () => {

        it('a shoppingList must have a quantity', () => {
            
            const shoppingList = makeFakeShoppingList(11223344, undefined);
            
            expect(() => makeShoppingList({...shoppingList}))
                .to.throw(RequiredParameterError, 'A product quantity is a required.');
        });

        it("a quantity can't be null", () => {
            
            const shoppingList = makeFakeShoppingList(11223344, null);
            
            expect(() => makeShoppingList({...shoppingList}))
                .to.throw(TypeError, "A product's quantity must be a number.");
        });

        it("a quantity can't be a string", () => {
            
            const shoppingList = makeFakeShoppingList(11223344, "404");
            
            expect(() => makeShoppingList({...shoppingList}))
                .to.throw(TypeError, "A product's quantity must be a number.");
        });

        it("a quantity can't be to big", () => {
            
            const shoppingList = makeFakeShoppingList(11223344, 22);
            
            expect(() => makeShoppingList({...shoppingList}))
                .to.throw(RangeError, "A product's quantity must be between 1 and 20.");
        });

        it("a quantity can't be small than 1", () => {
            
            const shoppingList = makeFakeShoppingList(11223344, 0);
            
            expect(() => makeShoppingList({...shoppingList}))
                .to.throw(RangeError, "A product's quantity must be between 1 and 20.");
        });
    });
});
