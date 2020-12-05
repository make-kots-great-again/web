// import server to bring in everything together

// bring in dev-dependencies
import { expect } from 'chai'
import { describe, before, it, after } from 'mocha'

import { groupService, shoppingListService, userService } from '../../../services'
import makeFakeGroup from '../../fixtures/fakeGroup'
import makeFakeUser from '../../fixtures/fakeUser'
import makeFakeShoppingList from '../../fixtures/fakeShoppingList'

const CODE_BARRE = 16650

describe('SHOPPINGLIST SERVICE', () => {
  let insertedUser = ''
  let insertedGroup = ''
  let insertedUserGroup = ''

  before(async () => {
    const { ...fakeUser } = makeFakeUser()
    const { ...fakeGroup } = makeFakeGroup('testoss', 'testoss')

    insertedUser = await userService.addUser({ ...fakeUser })
    insertedGroup = await groupService.addGroup({ username: insertedUser.username, ...fakeGroup })
    insertedUserGroup = await groupService.addMembersToGroup({ groupId: insertedGroup.dataValues.groupId, username: insertedUser.username })
  })

  after(async () => {
    await groupService.deleteUserFromGroup({ groupId: insertedGroup.dataValues.groupId, userId: insertedUser.userId })
    await groupService.deleteGroup({ groupId: insertedGroup.dataValues.groupId })
    await userService.removeUser({ userId: insertedUser.userId })
  })

  // TODO
  describe('#get-shopping-list', () => {
    it('not created', () => {

    })
  })

  // TODO
  describe('#get-group-shopping-list', () => {
    it('not created', () => {

    })
  })

  describe('#add-product-to-shopping-list', () => {
    it('url must include a groupId', async () => {
      const addProduct = await shoppingListService.putProductInShoppingList({})

      expect(addProduct.message).to.equal('You must supply a group id.')
    })

    it('can add a new product', async () => {
      const fakeShoppingList = makeFakeShoppingList(CODE_BARRE, 4)

      const addProduct = await shoppingListService.putProductInShoppingList({ groupId: insertedGroup.dataValues.groupId, userId: insertedUser.userId, ...fakeShoppingList })

      expect(Number(addProduct.code)).to.equal(fakeShoppingList.code)

      await shoppingListService.removeProductFromShoppingList({ itemId: addProduct.id, userId: insertedUser.userId })
    })

    // TODO : a implémenter plus tard
    /* it('can increase the quantity of an existing product in adding it a secund time to the list', () => {

        });

        it('can add a negative quantity of product if this quantity is less than the existing quantity of the product', () => {

        }); */

    it('cannot add an inexisting product', async () => {
      const fakeShoppingList = makeFakeShoppingList(1111111111100, 4)

      const addProduct = await shoppingListService.putProductInShoppingList(
        { groupId: insertedGroup.dataValues.groupId, userId: insertedUser.userId, ...fakeShoppingList })

      expect(addProduct.message).to.equal(`No product was found with this code ${fakeShoppingList.code}`)
    })

    it('cannot add twice a product for a single user', async () => {
      const fakeShoppingList = makeFakeShoppingList(CODE_BARRE, 4)

      const addProduct = await shoppingListService.putProductInShoppingList({ groupId: insertedGroup.dataValues.groupId, userId: insertedUser.userId, ...fakeShoppingList })
      const newAddProduct = await shoppingListService.putProductInShoppingList({ groupId: insertedGroup.dataValues.groupId, userId: insertedUser.userId, ...fakeShoppingList })

      expect(newAddProduct.statusCode).to.equal(409)

      await shoppingListService.removeProductFromShoppingList({ itemId: addProduct.id, userId: insertedUser.userId })
    })
  })

  describe('#remove-product-to-shopping-list', () => {
    it('itemId must include in parameters', async () => {
      const removedProduct = await shoppingListService.removeProductFromShoppingList({ itemId: undefined, userId: '' })

      expect(removedProduct.message).to.equal('You must supply the item id.')
    })

    it('can remove an existing product', async () => {
      const fakeShoppingList = makeFakeShoppingList(CODE_BARRE, 4)

      const addProduct = await shoppingListService.putProductInShoppingList({ groupId: insertedGroup.dataValues.groupId, userId: insertedUser.userId, ...fakeShoppingList })
      const removeProduct = await shoppingListService.removeProductFromShoppingList({ itemId: addProduct.id, userId: insertedUser.userId })
      expect(removeProduct).to.equal(1)
    })

    it('cannot remove an inexisting product', async () => {
      const fakeShoppingList = makeFakeShoppingList(CODE_BARRE, 4)

      const addProduct = await shoppingListService.putProductInShoppingList({ groupId: insertedGroup.dataValues.groupId, userId: insertedUser.userId, ...fakeShoppingList })
      await shoppingListService.removeProductFromShoppingList({ itemId: addProduct.id, userId: insertedUser.userId })
      const newRemoveProduct = await shoppingListService.removeProductFromShoppingList({ itemId: addProduct.id, userId: insertedUser.userId })

      expect(newRemoveProduct.message).to.equal(`No item with this id '${addProduct.id}' was found in the shopping list !`)
    })
  })
})
