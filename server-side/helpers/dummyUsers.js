const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcryptjs');

let dummyUsers = [];

const usernames = ['james', 'john', 'william', 'paul', 'thomas', 'kevin', 'gary', 'larry', 'dennis', 'roger']

usernames.forEach(x => {
    dummyUsers.push({
        firstName: x.split("").reverse().join(""),
        lastName: x.split('').sort(() => Math.random() - 0.5).join(''),
        username: x, email: `${x}@gmail.com`, userId: uuidv4(),
        password: bcrypt.hashSync('toto', 10),
        createdAt: new Date(), updatedAt: new Date(),
    })
})

module.exports = {dummyUsers, usernames}
