'use strict'
/** @responseTemplate
 * Methods to build custom response messages
 * @param {code,
            message,
            description}
 * @returns {code,
            message,
            description}  return error response with code,message & description
 */
const Response = {

  general (data) {
    return data
  },
  errorContent (code = '404',
    message = 'invalid request param provided',
    description = 'error occoured on server, please try again after some time') {
    return {
      code,
      message,
      description
    }
  },
  error (code = '404',
    message = 'some error occoured',
    description = 'error occoured on server, please try again after some time') {
    return {
      code,
      message,
      description
    }
  },
  successRequest ({ httpCode, description, reponseBody }) {
    return {
      statusCode: httpCode,
      body: {
        message: description,
        ...reponseBody
      }
    }
  },
  authError () {
    return Response.error(
      403,
      'authentication error',
      'no authentication token provided, please login first and provide the authentication token.'
    )
  },
  emptyContent () {
    return Response.general({
      code: 402,
      message: 'empty content found',
      description: 'you must provide valid data and it must not be empty.',
      helpful_links: ['http://stackoverflow.com/questions/18419428/what-is-the-minimum-valid-json']
    })
  },
  invalidContentType () {
    return Response.general({
      code: 400,
      message: 'invalid content type',
      description: 'you must specify content type and it must be application/json',
      helpful_links: ['http://stackoverflow.com/questions/477816/what-is-the-correct-json-content-type']
    })
  },
  routeNotFound () {
    return Response.error(
      405,
      'resource not found',
      'the resource your tried to access doesn\'t exist or you dont have permissions to access it.'
    )
  },
  userNotFound () {
    return Response.error(
      400,
      'user not found',
      'the user you\'re looking for doesn\'t exist or you dont have permissions to access it.'
    )
  },
  updateErrorOccoured (error) {
    return Response.error(
      301,
      'error occoured',
      error || 'error occoured while updating your data.'
    )
  },
  success (description, data = null) {
    return {
      code: 200,
      message: 'success',
      description: description || 'data successfully saved'
    }
  }
}

export default Response
