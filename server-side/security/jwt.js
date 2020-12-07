import env from '../config/environment'

export default function makeJwtFactory ({ jwt }) {
  return Object.freeze({
    generateJwt, generateGroupJwt
  })

  function generateJwt ({ userEmail, userId } = {}) {
    return 'JWT ' + jwt.sign({ userEmail: userEmail, userId: userId },
      env.JWT_KEY, { expiresIn: '7d' })
  }

  function generateGroupJwt ({ groupName, groupBarCode } = {}) {
    return 'JWT ' + jwt.sign({ groupName: groupName, groupBarCode: groupBarCode },
      env.JWT_KEY, { expiresIn: '14d' })
  }
}
