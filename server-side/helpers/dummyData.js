const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcrypt');

const dummyUsers = [];
const dummyGroups = [];
const dummyUserGroups = [];

const usernames = ['james', 'john', 'william', 'paul', 'thomas', 'kevin', 'gary', 'larry', 'dennis', 'roger'];
const groups = ['football', 'tennis', 'basketball', 'volleyball', 'hockey'];

usernames.forEach(x => {
    dummyUsers.push({
        firstName: x.split('').reverse().join(''),
        lastName: x.split('').sort(() => Math.random() - 0.5).join(''),
        username: x, email: `${x}@gmail.com`, userId: uuidv4(),
        password: bcrypt.hashSync('toto', 10),
        createdAt: new Date(), updatedAt: new Date(),
    });
});

groups.forEach(x => {
    dummyGroups.push({groupId: uuidv4(), groupName: x,
        groupDescription: `this a ${x} group`})
});

Array(5).fill(0).forEach((x, i) => {
    dummyUserGroups.push({
        userId: dummyUsers[i].userId,
        groupId: dummyGroups[i].groupId,
        role: (i === 2) ? 'admin' : 'member'
    })
});

module.exports = {dummyUsers, usernames, dummyGroups, groups, dummyUserGroups}
