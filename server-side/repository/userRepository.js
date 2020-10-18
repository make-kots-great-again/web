export default function makeUserRepository({User, Op}) {
    return Object.freeze({
        save, findAll, findPseudo, findByEmailOrUsername,
        findByEmail, findByUsername, findById, remove, put, patchPwd,
        searchUsername
    });

    async function save({...userInfo}) {
        return User.create(userInfo);
    }

    async function searchUsername({username}) {
        return User.findAll(
            {
                where: {
                    username: {
                        [Op.startsWith]: username,
                    }
                }, attributes: ['username', 'email']
            });
    }

    /**
     * Fonction permettant de mettre à jour tout le profil d'un utilisateur
     * dans la db.
     * @param id : l'identifiant de l'utilisateur à modifier. 
     * @param userInfo (opérateur spread) toutes les données à modifier.
     * @returns l'utilisateur modifié
     */
    async function put({id},{...userInfo}) {
        return User.update(
            {...userInfo},
            {returning: true, plain: true, where: {userId: id}}
        )
    }

    /**
     * Fonction permettant de mettre à jour le mot de passe d'un utilisateur
     * dans la db.
     * @param id : l'identifiant de l'utilisateur à modifier. 
     * @param newPassword le nouveau mot de passe préalablement encrypté.
     * @returns l'utilisateur modifié
     */
    async function patchPwd({id},{newPassword}) {
        return User.update(
            {password: newPassword},
            {returning: true, plain: true, where: {userId: id}}
        )
    }

    async function findAll() {
        return User.findAll({attributes: ['userId', 'username', 'email', 'firstName', 'lastName']});
    }

    /**
     * Fonction permettant de récupérer le profil d'un utilisateur
     * depuis la db sur base de son identifiant.
     * @param id : l'identifiant de l'utilisateur à modifier. 
     * @returns l'utilisateur.
     */
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
        return User.findOne({where: {username: username}});
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

    async function findByEmail({...userInfo}) {
        return User.findAll({
            where: {
                email: userInfo.email,
            }
        });
    }

    async function remove({id: userId}) {
        return User.destroy({where: {userId: userId}});
    }
}

