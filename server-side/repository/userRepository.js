export default function makeUserRepository({User, Op}) {
    return Object.freeze({
        save, findAll, findPseudo, findByEmailOrUsername
    });

    async function save({...userInfo}) {
        return User.create(userInfo);
    }

    async function findAll() {
        return User.findAll({attributes: ['username', 'email', 'firstName', 'lastName']});
    }

    async function findPseudo({pseudo}) {
        return User.findAll({where: {
                [Op.or]: [
                    {username: pseudo}, {email: pseudo}
                ]
            }
        });
    }

    async function findByEmailOrUsername({email: email, username: username}) {
        return User.findAll({where: {
                [Op.or]: [
                    {email: email}, {username: username}
                ]
            }
        });

    }
}

