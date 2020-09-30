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

    describe('#remove-user', () => {

    });


});
