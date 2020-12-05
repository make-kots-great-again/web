function generateGroupInfos (username, langage) {
  switch (langage) {
    case 'french':
      return {
        groupName: 'Liste personnelle ' + username,
        groupDescription: 'Votre groupe personnel. Vous êtes le seul à pouvoir y accéder et en voir le contenu.'
      }
    default:
      return {
        groupName: username + ' Own List',
        groupDescription: 'Your own group. Only you can use and view this group.'
      }
  }
}

exports.generateGroupInfos = generateGroupInfos
