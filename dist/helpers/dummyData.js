"use strict";

const {
  v4: uuidv4
} = require('uuid');

const bcrypt = require('bcrypt');

const {
  products
} = require('./dummyProducts');

const dummyUsers = [];
const dummyGroups = [];
const dummyUserGroups = [];
const shoppingList = [];
const usernames = ['james', 'john', 'william', 'paul', 'thomas', 'kevin', 'gary', 'larry', 'dennis', 'roger'];
const groups = ['football', 'tennis', 'basketball', 'volleyball', 'hockey'];
usernames.forEach(x => {
  dummyUsers.push({
    firstName: x.split('').reverse().join(''),
    lastName: x.split('').sort(() => Math.random() - 0.5).join(''),
    username: x,
    email: `${x}@gmail.com`,
    userId: uuidv4(),
    password: bcrypt.hashSync('toto', 10),
    createdAt: new Date(),
    updatedAt: new Date()
  });
});
groups.forEach(x => {
  dummyGroups.push({
    groupId: uuidv4(),
    groupName: x,
    groupDescription: `this a ${x} group`
  });
});
Array(5).fill(0).forEach((x, i) => {
  dummyUserGroups.push({
    id_group_user: uuidv4(),
    userId: dummyUsers[i].userId,
    groupId: dummyGroups[i].groupId,
    role: i === 2 ? 'admin' : 'member'
  });
});
Array(5).fill(0).forEach((x, i) => {
  shoppingList.push({
    id: uuidv4(),
    id_group_user: dummyUserGroups[i].id_group_user,
    code: products[i].code,
    quantity: Math.floor(Math.random() * 5) + 1
  });
}); // add a second product for james in the shopping list of group 1

shoppingList.push({
  id: uuidv4(),
  id_group_user: dummyUserGroups[0].id_group_user,
  code: products[2].code,
  quantity: Math.floor(Math.random() * 5) + 1
}); // make james join group 3

dummyUserGroups.push({
  id_group_user: uuidv4(),
  userId: dummyUsers[0].userId,
  groupId: dummyGroups[3].groupId,
  role: 'member'
}); // add a product for james (last one added) in the shopping list of group 3

shoppingList.push({
  id: uuidv4(),
  id_group_user: dummyUserGroups[dummyUserGroups.length - 1].id_group_user,
  code: products[2].code,
  quantity: Math.floor(Math.random() * 5) + 1
});
module.exports = {
  dummyUsers,
  usernames,
  dummyGroups,
  groups,
  dummyUserGroups,
  products,
  shoppingList
};