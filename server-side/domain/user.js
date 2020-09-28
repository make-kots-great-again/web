export default function buildMakeUser(isValidEmail, hashedPassword, requiredParameter) {
    return ({
                name = requiredParameter('A name'),
                email = requiredParameter('An email'),
                password = requiredParameter('A password')
            } = {}) => {

        if (typeof name !== 'string') throw new TypeError('A username must be a string.');

        if (name.length < 4 || name.length >= 12)
            throw new RangeError('A name length must be between 4 and 12 .');

        if (typeof email !== 'string') throw new SyntaxError('An email must be of type string.');

        if (!EmailValidation()) throw new SyntaxError('Invalid email.');

        if (typeof password !== 'string') throw new TypeError('The password must be of type string.');

        //  if (!makeHash().match(/^\$2[aby]?\$\d{1,2}\$[.\/A-Za-z0-9]{53}$/)) throw new Error('Password not hashed !');

        return Object.freeze({
            getName: () => name,
            getEmail: () => email,
            getPassword: () => hashedPassword(password),
        });

        function EmailValidation() {
            return isValidEmail(email);
        }
    }
}
