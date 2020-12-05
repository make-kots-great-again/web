export class UniqueConstraintError extends Error {
  constructor (value) {
    super(`${value} must be unique.`)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UniqueConstraintError)
    }
  }
}

export class InvalidPropertyError extends Error {
  constructor (msg) {
    super(msg)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidPropertyError)
    }
  }
}

export class RequiredParameterError extends Error {
  constructor (param) {
    super(`${param} is a required.`)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequiredParameterError)
    }
  }
}
