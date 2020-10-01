const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcryptjs');

const dummyUsers = [{
    firstName: 'John', lastName: 'Doe', username: 'donny',
    email: 'donny@gmail.com', userId: uuidv4(),
    password: bcrypt.hashSync('toto', 10),
    createdAt: new Date(), updatedAt: new Date(),
},
    {
        firstName: 'Doe', lastName: 'Joe', username: 'joey',
        email: 'joey@gmail.com', userId: uuidv4(),
        password: bcrypt.hashSync('toto', 10),
        createdAt: new Date(), updatedAt: new Date(),
    }]

const usernames = dummyUsers.map(x => x.username);

module.exports = {dummyUsers, usernames}
