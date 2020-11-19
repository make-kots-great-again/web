"use strict";

var _app = _interopRequireDefault(require("../../../../app"));

var _chai = require("chai");

var _mocha = require("mocha");

var _environment = _interopRequireDefault(require("../../../config/environment"));

var _services = require("../../../services");

var _fakeGroup = _interopRequireDefault(require("../../fixtures/fakeGroup"));

var _fakeUser = _interopRequireDefault(require("../../fixtures/fakeUser"));

var _repository = require("../../../repository");

var _fakeAddProductShoppingList = _interopRequireDefault(require("../../fixtures/fakeAddProductShoppingList"));

var _puppeteer = require("puppeteer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//During the test the env variable is set to test
process.env.NODE_ENV = 'test'; //import server to bring in everything together

(0, _mocha.describe)('SHOPPINGLIST SERVICE', () => {
  //TODO
  (0, _mocha.describe)('#get-shopping-list', () => {}); //TODO

  (0, _mocha.describe)('#get-group-shopping-list', () => {}); //TODO Louis

  (0, _mocha.describe)('#add-product-to-shopping-list', () => {
    console.log("test1");
    /* const {...fakeUser} = makeFakeUser();
     const {...fakeGroup} = makeFakeGroup();
      const insertedUser = await userService.addUser({...fakeUser});
     const insertedGroup = await groupService.addGroup({...fakeGroup});
     const insertedUserGroup = await groupService.addMembersToGroup({groupId: insertedGroup.groupId, username: insertedUser.username});*/

    (0, _mocha.it)('url must include a groupId', async () => {
      const addProduct = await _services.shoppingListService.putProductInShoppingList();
      (0, _chai.expect)(addProduct.message).to.equal("You must supply a group id.");
    });
    /*it('can add a new product', () => {
        
        const fakeProductShoppingList = makeFakeAddProductShoppingList(insertedUser.username, false, 4);
         const addProduct = await shoppingListService.putProductInShoppingList({groupId: insertedGroup.groupId, userId: insertedUser.userId, fakeProductShoppingList});
         expect(addProduct.message).to
            .equal("Product successfully added to the list !");
        console.log(addProduct)
         await shoppingListService.removeProductFromShoppingList(addProduct.id);
    });*/

    (0, _mocha.it)('can increase the quantity of an existing product in adding it a secund time to the list', () => {});
    (0, _mocha.it)('can add a negative quantity of product if this quantity is less than the existing quantity of the product', () => {});
    (0, _mocha.it)('cannot add an inexisting product', () => {});
    (0, _mocha.it)('cannot have a product with a negative quantity', () => {});
    /*await groupRepository.removeUserFromGroup({groupId: insertedGroup.groupId, userId: insertedUser.userId})
    await groupRepository.remove({id: insertedGroup.groupId});
    await userRepository.remove({id: insertedUser.userId});*/
  }); //TODO Louis

  (0, _mocha.describe)('#remove-product-to-shopping-list', () => {
    (0, _mocha.it)('url must include a listId', () => {
      const removedProduct = _services.shoppingListService.removeProductFromShoppingList();

      (0, _chai.expect)(removedProduct.message).to.equal('Route Not found !');
    });
    (0, _mocha.it)('can remove an existing product', () => {});
    (0, _mocha.it)('cannot remove an inexisting product', () => {});
  });
});