export default function buildMakeGroup(requiredParameter) {
    return ({
                groupName = requiredParameter('A groupName')
            } = {}) => {

        if (typeof groupName !== 'string') throw new TypeError('A groupName must be a string.');

        return Object.freeze({
            getGroupName: () => groupName
        });
    }
}
