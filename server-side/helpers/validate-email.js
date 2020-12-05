import EmailValidator from 'email-validator'

export default function isValidEmail (email) {
  return EmailValidator.validate(email)
}
