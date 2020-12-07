export default function makeFakeUser (overrides) {
  const randomUser = Math.random().toString(36).substr(2, 9)
  const user = {
    username: randomUser,
    firstName: randomUser.split('').reverse().join(''),
    lastName: randomUser,
    email: `${randomUser}@gmail.com`,
    password: 'toto'
  }

  return {
    ...user,
    ...overrides
  }
}
