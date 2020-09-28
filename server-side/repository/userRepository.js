export default function makeUserRepository({User}) {
    return Object.freeze({
        save, findAll,
    });

    async function save({...userInfo}) {
    return User.create({userInfo});
    }

    async function findAll() {

    }

}

