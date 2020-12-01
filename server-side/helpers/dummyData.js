const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const {products} = require('./dummyProducts');
const helper = require('./dummyHelpers');

const dummyUsers = [];
const dummyGroups = [];
const dummyPersonalGroups = [];
const dummyUserGroups = [];
const shoppingList = [];
const reverse = [];

const usernames = ['james', 'john', 'william', 'paul', 'thomas', 'kevin', 'gary', 'larry', 'dennis', 'roger'];
const groups = ['football', 'tennis', 'basketball', 'volleyball', 'hockey', 'cricket', 'baseball', 'golf', 'rugby', 'boxing'];

const langage = "french"


Array(10).fill(0).forEach((x, i) => {

    groupInfo = helper.generateGroupInfos(usernames[i], langage);

    dummyUsers.push({
        firstName: usernames[i].split('').reverse().join(''),
        lastName: usernames[i].split('').sort(() => Math.random() - 0.5).join(''),
        username: usernames[i], email: `${usernames[i]}@gmail.com`, userId: uuidv4(),
        password: bcrypt.hashSync('toto', 10),
        createdAt: new Date(), updatedAt: new Date(),
    });

    dummyGroups.push({
        groupId: uuidv4(), groupName: groups[i],
        groupBarCode: crypto.randomBytes(6).toString('hex'),
        groupDescription: `this a ${groups[i]} group`
    });

    dummyPersonalGroups.push({
        groupId: uuidv4(), groupName: groupInfo.groupName,
        groupBarCode: crypto.randomBytes(6).toString('hex'),
        groupDescription: groupInfo.groupDescription
    });

    dummyUserGroups.push({
        id_group_user: uuidv4(),
        userId: dummyUsers[i].userId,
        groupId: dummyGroups[i].groupId,
        role: (i === 2) ? 'admin' : 'member'
    });

    dummyUserGroups.push({
        id_group_user: uuidv4(),
        userId: dummyUsers[i].userId,
        groupId: dummyPersonalGroups[i].groupId,
        role: 'personal'
    });

    reverse.push({
        id: uuidv4(),
        code: products[i].code,
        quantity: Math.floor(Math.random() * 5) + 1,
        groupId: dummyGroups[i].groupId,
        expiringIn: 5,
        valid: (i % 2 === 0)
    });

    reverse.push({
        id: uuidv4(),
        code: products[19 - i].code,
        quantity: Math.floor(Math.random() * 5) + 1,
        groupId: dummyGroups[i].groupId,
        expiringIn: 5,
        valid: (i % 2 !== 0)
    });

});

Array(20).fill(0).forEach((x, i) => {

    shoppingList.push({
        id: uuidv4(),
        id_group_user: dummyUserGroups[i].id_group_user,
        code: products[i].code,
        productNote: (i % 2 !== 0) ? 'This is a note for this product' : null,
        quantity: Math.floor(Math.random() * 5) + 1,
        groupProduct: (dummyUserGroups[i].role !== 'personal'
            && i === 0 || i === 4 || i === 10 || i === 14 || i === 18)
    });
});

// add a second product for james in the shopping list of group 1
shoppingList.push({
    id: uuidv4(),
    id_group_user: dummyUserGroups[0].id_group_user,
    code: products[5].code,
    quantity: Math.floor(Math.random() * 5) + 1,
    groupProduct: true
});

// make james join group 3
dummyUserGroups.push({
    id_group_user: uuidv4(),
    userId: dummyUsers[0].userId,
    groupId: dummyGroups[3].groupId,
    role: 'member'
})

// add a product for james (last one added) in the shopping list of group 3
shoppingList.push({
    id: uuidv4(),
    id_group_user: dummyUserGroups[dummyUserGroups.length - 1].id_group_user,
    code: products[2].code,
    productNote: null,
    quantity: Math.floor(Math.random() * 5) + 1,
    groupProduct: false
});

dummyGroups.push(...dummyPersonalGroups);

module.exports = {
    dummyUsers, usernames, dummyGroups, reverse,
    groups, dummyUserGroups, products, shoppingList
}

