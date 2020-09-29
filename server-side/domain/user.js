export default function buildMakeUser(isValidEmail, hashedPassword, requiredParameter) {
    return ({
                username = requiredParameter('A username'),
                firstName = requiredParameter('A firstName'),
                lastName = requiredParameter('A lastName'),
                email = requiredParameter('An email'),
                password = requiredParameter('A password')
            } = {}) => {

        if (typeof username !== 'string') throw new TypeError('A username must be a string.');

        if (username.length < 4 || username.length >= 32)
            throw new RangeError('A name length must be between 4 and 12 .');

        if (typeof email !== 'string') throw new SyntaxError('An email must be of type string.');

        if (!EmailValidation()) throw new SyntaxError('Invalid email.');

        if (typeof password !== 'string') throw new TypeError('The password must be of type string.');

        //  if (!makeHash().match(/^\$2[aby]?\$\d{1,2}\$[.\/A-Za-z0-9]{53}$/)) throw new Error('Password not hashed !');

        return Object.freeze({
            getUsername: () => username,
            getFirstName: () => firstName,
            getLastName: () => lastName,
            getEmail: () => email,
            getPassword: () => hashedPassword(password),
        });

        function EmailValidation() {
            return isValidEmail(email);
        }
    }
}
