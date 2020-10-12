export default function buildMakeGroup(requiredParameter) {
    return ({
                groupName = requiredParameter('A groupName'),
                groupDescription = requiredParameter('A group description')
            } = {}) => {

        if (typeof groupName !== 'string') throw new TypeError('A groupName must be a string.');
        if (typeof groupDescription !== 'string')
            throw new TypeError('A group description must be a string.');

        return Object.freeze({
            getGroupName: () => groupName,
            getGroupDescription: () => groupDescription
        });
    }
}
