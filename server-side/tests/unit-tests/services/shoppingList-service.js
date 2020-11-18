//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//import server to bring in everything together
import server from "../../../../app";

//bring in dev-dependencies
import {expect} from 'chai';
import {describe, before, it, after} from 'mocha';

import env from '../../../config/environment'
import {groupService, shoppingListService, userService} from "../../../services"
import makeFakeGroup from '../../fixtures/fakeGroup';
import makeFakeUser from '../../fixtures/fakeUser'
import { groupRepository, userRepository } from "../../../repository";
import makeFakeShoppingList from "../../fixtures/fakeShoppingList";
import { product } from "puppeteer";

const CODE_BARRE = 16650;

describe ('SHOPPINGLIST SERVICE', () => {

    let insertedUser = "";
    let insertedGroup = "";
    let insertedUserGroup= "";

    before(async () => {

        const {...fakeUser} = makeFakeUser();
        const {...fakeGroup} = makeFakeGroup("testoss", "testoss");

        insertedUser = await userService.addUser({...fakeUser});
        insertedGroup = await groupService.addGroup({username: insertedUser.username, ...fakeGroup});
        insertedUserGroup = await groupService.addMembersToGroup({groupId: insertedGroup.dataValues.groupId, username: insertedUser.username});

    });

    after(async () => {

        await groupRepository.removeUserFromGroup({groupId: insertedGroup.dataValues.groupId, userId: insertedUser.userId})
        await groupRepository.removeGroup({groupId: insertedGroup.dataValues.groupId});
        await userRepository.remove({id: insertedUser.userId});
    });

    //TODO
    describe('#get-shopping-list', () => {
        it('not created', () => {

        });
    });

    //TODO
    describe('#get-group-shopping-list', () => {
        it('not created', () => {

        });
    });

    describe('#add-product-to-shopping-list', () => {
        
        it('url must include a groupId', async () => {
   
            const addProduct = await shoppingListService.putProductInShoppingList({});

            expect(addProduct.message).to.equal("You must supply a group id.");
        });
        
        it('can add a new product', async () => {

            const fakeShoppingList = makeFakeShoppingList(CODE_BARRE, 4);

            const addProduct = await shoppingListService.putProductInShoppingList({groupId: insertedGroup.dataValues.groupId, userId: insertedUser.userId, ...fakeShoppingList});

            expect(addProduct.code).to
                .equal(fakeShoppingList.code);

            await shoppingListService.removeProductFromShoppingList({listId: addProduct.id});
           
        });

        //TODO : a implémenter plus tard
        /*it('can increase the quantity of an existing product in adding it a secund time to the list', () => {

        });

        it('can add a negative quantity of product if this quantity is less than the existing quantity of the product', () => {

        });*/

        it('cannot add an inexisting product', async () => {
            
            const fakeShoppingList = makeFakeShoppingList(1111111111100, 4);

            const addProduct = await shoppingListService.putProductInShoppingList({groupId: insertedGroup.dataValues.groupId, userId: insertedUser.userId, ...fakeShoppingList});

            expect(addProduct.message).to
                .equal(`No product was found with this code ${fakeShoppingList.code}`);           
        });

        it('cannot add twice a product for a single user', async () => {
            const fakeShoppingList = makeFakeShoppingList(CODE_BARRE, 4);

            const addProduct = await shoppingListService.putProductInShoppingList({groupId: insertedGroup.dataValues.groupId, userId: insertedUser.userId, ...fakeShoppingList});
            const newAddProduct = await shoppingListService.putProductInShoppingList({groupId: insertedGroup.dataValues.groupId, userId: insertedUser.userId, ...fakeShoppingList});


            expect(newAddProduct.statusCode).to
                .equal(409);

            await shoppingListService.removeProductFromShoppingList({listId: addProduct.id});
        });

        
    });
    
    describe('#remove-product-to-shopping-list', () => {
        
        it('url must include a listId', async () => {

            const removedProduct = await shoppingListService.removeProductFromShoppingList({});

            console.log(removedProduct);

            expect(removedProduct.message).to.equal('You must supply a listProduct id.');
            
        });

        it('can remove an existing product', async () => {

            const fakeShoppingList = makeFakeShoppingList(CODE_BARRE, 4);

            const addProduct = await shoppingListService.putProductInShoppingList({groupId: insertedGroup.dataValues.groupId, userId: insertedUser.userId, ...fakeShoppingList});

            const removeProduct = await shoppingListService.removeProductFromShoppingList({listId: addProduct.id});


            expect(removeProduct).to
                .equal(1);

            
        });

        it('cannot remove an inexisting product', async () => {
            
            const fakeShoppingList = makeFakeShoppingList(CODE_BARRE, 4);

            const addProduct = await shoppingListService.putProductInShoppingList({groupId: insertedGroup.dataValues.groupId, userId: insertedUser.userId, ...fakeShoppingList});

            await shoppingListService.removeProductFromShoppingList({listId: addProduct.id});

            const newRemoveProduct = await shoppingListService.removeProductFromShoppingList({listId: addProduct.id});



            expect(newRemoveProduct).to
                .equal(0);
        });
    });

    
});