export default function makeUserRepository({User, Op}) {
    return Object.freeze({
        save, findAll, findPseudo, findByEmailOrUsername,
        findById, remove, findByUsername
    });

    async function save({...userInfo}) {
        return User.create(userInfo);
    }

    async function findAll() {
        return User.findAll({attributes: ['userId', 'username', 'email', 'firstName', 'lastName']});
    }

    async function findById({id: userId}) {
        return User.findByPk(userId);

    }

    async function findPseudo({pseudo}) {
        return User.findAll({
            where: {
                [Op.or]: [
                    {username: pseudo}, {email: pseudo}
                ]
            }
        });
    }

    async function findByUsername({username}) {
        return User.findOne(
            {where: {username: username}});
    }

    async function findByEmailOrUsername({email: email, username: username}) {
        return User.findAll({
            where: {
                [Op.or]: [
                    {email: email}, {username: username}
                ]
            }
        });
    }

    async function remove({id: userId}) {
        return User.destroy({where: {userId: userId}});
    }
}

