const makeCallback = (controller) => {
  return async (req, res) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      id: req.id,
      host: req.hostname,
      user: req.user,
      url: req.originalUrl,
      method: req.method,
      path: req.path,
      headers: {
        'Content-Type': req.get('Content-Type'),
        Referer: req.get('referer'),
        'User-Agent': req.get('User-Agent')
      }
    }

    try {
      const httpResponse = await controller(httpRequest)

      res
        .type('json')
        .status(httpResponse.statusCode)
        .json(httpResponse.body)
    } catch (error) {
      res
        .status(500)
        .send({ message: 'An unknown error occurred.', error: error })
    }
  }
}

export default makeCallback
