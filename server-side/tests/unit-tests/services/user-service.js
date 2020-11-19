//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//import server to bring in everything together
import server from "../../../../app";

//bring in dev-dependencies
import {expect} from 'chai';
import {describe, it} from 'mocha';

import makeFakeUser from '../../fixtures/fakeUser'
import env from '../../../config/environment'
import {userService} from "../../../services"
import {userRepository} from '../../../repository'


//TODO test can login function

describe('USER SERVICE', () => {

    describe('#register-user', () => {

        it('inserts a user in the database', async () => {

            const {...fakeUser} = makeFakeUser();

            const inserted = await userService.addUser({...fakeUser});
            fakeUser.password = inserted.password;
            fakeUser.userId = inserted.userId;
            expect(inserted).to.deep.include(fakeUser);

            await userRepository.remove({id: inserted.userId});
        });

        it("can't register a user if he/she already exists", async () => {

            const {...fakeUser} = makeFakeUser();
            const firstUser = await userService.addUser({...fakeUser});
            const secondtUser = await userService.addUser({...fakeUser});

            expect(secondtUser.message).to
                .equal("A user with the same username or email already exists !");

            await userRepository.remove({id: firstUser.userId});
        });
    });

    describe('#login-user', () => {

        it("can authenticate a user", async () => {

            const {...fakeUser} = makeFakeUser();

            const createdUser = await userService.addUser({...fakeUser});

            const loggedInUser = await userService.logInUser(
                {pseudo: fakeUser.username, password: fakeUser.password});

            expect(loggedInUser).to.have.property('token');
            expect(loggedInUser.data.username).to.equal(fakeUser.username);

            await userRepository.remove({id: createdUser.userId});
        });

        it("must include an pseudo", async () => {
            const loggedInUser = await userService.logInUser(
                {pseudo: undefined, password: "123"});
            expect(loggedInUser.message).to.equal("You must supply a pseudo.");

        });

        it("must include an password", async () => {
            const loggedInUser = await userService.logInUser(
                {pseudo: "12345", password: undefined});
            expect(loggedInUser.message).to.equal("You must supply a password.");

        });

        it("can't authenticate unregistered user", async () => {
            const loggedInUser = await userService.logInUser(
                {pseudo: '*******', password: '*******'});
            expect(loggedInUser.message).to.equal("Authentication failed !");

        });

        it("can't authenticate a user with a wrong password user", async () => {

            const {...fakeUser} = makeFakeUser();

            const createdUser = await userService.addUser({...fakeUser});

            const loggedInUser = await userService.logInUser(
                {pseudo: fakeUser.username, password: '*******'});

            expect(loggedInUser.message).to.equal("Authentication failed !");

            await userRepository.remove({id: createdUser.userId});

        });

    });

    describe('#list-users', () => {

    });

    describe('#list-one-user', () => {
        
        it("find user by id", async () => {
            const {...fakeUser} = makeFakeUser();
            const inserted = await userService.addUser({...fakeUser});
            fakeUser.userId = inserted.userId;

            const listedOneUser = await userService.listOneUser({id: fakeUser.userId});
            expect(listedOneUser.dataValues.username).to.equal(fakeUser.username);
            expect(listedOneUser.dataValues.firstName).to.equal(fakeUser.firstName);
            expect(listedOneUser.dataValues.lastName).to.equal(fakeUser.lastName);
            expect(listedOneUser.dataValues.email).to.equal(fakeUser.email);
            await userRepository.remove({id: inserted.userId});
        });

        it("must include an id", async () => {
            const listedOneUser = await userService.listOneUser();
            expect(listedOneUser.message).to.equal('You must supply an id.');

        });

        it("id must be valid", async () => {
            const listedOneUser = await userService.listOneUser(
                {id: "%,!123"});
            expect(listedOneUser.message).to.equal('%,!123 is not a valid v4 UUID');

        });

    });

    describe('#put-one-user', () => {
        
        xit("put user with id", async () => {
            const {...fakeUser} = makeFakeUser();
            const inserted = await userService.addUser({...fakeUser});
            fakeUser.userId = inserted.userId;
            
            const modifiedUserInfo = {
                username: 'test',
                lastName: 'test45',
                firstName: 'test4',
                email: fakeUser.email,
            }
            
            const puttedUser = await userService.putUser({userId: fakeUser.userId, ...modifiedUserInfo});

            console.log(puttedUser);

            expect(puttedUser[1].dataValues.username).to.equal(modifiedUserInfo.username);
            expect(puttedUser[1].dataValues.firstName).to.equal(modifiedUserInfo.firstName);
            expect(puttedUser[1].dataValues.lastName).to.equal(modifiedUserInfo.lastName);
            expect(puttedUser[1].dataValues.email).to.equal(modifiedUserInfo.email);
            
            await userRepository.remove({id: inserted.userId});
        });

        it("url must include an id", async () => {
            const puttedUser = await userService.listOneUser();
            expect(puttedUser.message).to.equal('You must supply an id.');

        });

        it("id must be valid", async () => {
            const puttedUser = await userService.listOneUser(
                {id: "%,!123"});
            expect(puttedUser.message).to.equal('%,!123 is not a valid v4 UUID');

        });

    });

    describe('#remove-user', () => {

    });


});
