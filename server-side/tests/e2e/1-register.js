const puppeteer = require('puppeteer')
const { expect } = require('chai')

describe('E2E TESTS FOR SINGUP PAGE', async () => {
  let browser
  let page

  const user = Math.random().toString(36).substr(2, 9)

  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      slowMo: 35,
      args: ['--window-size=1920,1080']
    })
  })

  beforeEach(async () => {
    page = await browser.newPage()
    await page.goto('http://localhost:4200/register')
  })

  after(async () => {
    await browser.close()
  })

  describe('/POST Register', () => {
    it('it should singup a user', async () => {
      expect(await page.$eval('#formTitle', e => e.innerText)).to.eql('Créer un compte')

      expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(true)

      const username = await page.$('#username')
      const lastName = await page.$('#lastNameInput')
      const fistName = await page.$('#fistNameInput')
      const email = await page.$('#inputEmail')
      const password = await page.$('#inputPassword')
      const confirmPassword = await page.$('#PasswordConfirm')
      const submit = await page.$('#submitBtn')

      await lastName.click({ clickCount: 3 })
      await lastName.type(user.split('').reverse().join(''))

      await fistName.click({ clickCount: 3 })
      await fistName.type(user.split('').sort(() => Math.random() - 0.5).join(''))

      await username.click({ clickCount: 3 })
      await username.type(user)

      await email.click({ clickCount: 3 })
      await email.type(`${user}@gmail.com`)

      await password.click({ clickCount: 3 })
      await password.type('toto')

      await confirmPassword.click({ clickCount: 3 })
      await confirmPassword.type('toto')

      expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(false)

      await submit.click()

      await page.waitFor(1000)

      expect(await page.$eval('#successMessage', e => e.innerText))
        .eql('Votre compte a bien été créé !')

      await page.waitForNavigation()

      expect(page.url()).eql('http://localhost:4200/login')

      await page.waitFor(1000)
    })
  })

  describe('/register errors', () => {
    it('it should display an error if the username\'s length is below 4', async () => {
      const username = await page.$('#username')

      await username.click({ clickCount: 3 })
      await username.type('u')

      await page.waitFor(1000)

      expect(await page.$eval('#usernameError1', el => el.innerText))
        .eql('u la longueur minimale est 4')

      expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(true)
    })

    it('it should display an error if the email is invalid', async () => {
      const email = await page.$('#inputEmail')

      await email.click({ clickCount: 3 })
      await email.type('laura-gmail.com')
      await page.waitFor(1000)

      expect(await page.$eval('#emailInvalid', el => el.innerText))
        .eql('laura-gmail.com n\'est pas un email valide')

      // expect((await page.$eval('#emailInvalid', e => e.className)).includes('is-invalid')).eql(true);

      expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(true)
    })

    it('it should display an error if the passwords don\'t match', async () => {
      const password = await page.$('#inputPassword')
      const confirmPassword = await page.$('#PasswordConfirm')

      await password.click({ clickCount: 3 })
      await password.type('qR7AAJGnZ4CorNWKBfsmYQ')

      await confirmPassword.click({ clickCount: 3 })
      await confirmPassword.type('toto')

      await page.waitFor(1000)

      expect(await page.$eval('#passwordMatchError', el => el.innerHTML))
        .eql('Les mots de passe ne correspondent pas')

      expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(true)
    })

    it('it should display an error on any form field in an invalid state', async () => {
      expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(true)

      const username = await page.$('#username')
      const lastName = await page.$('#lastNameInput')
      const fistName = await page.$('#fistNameInput')
      const email = await page.$('#inputEmail')
      const password = await page.$('#inputPassword')
      const confirmPassword = await page.$('#PasswordConfirm')

      await lastName.click({ clickCount: 3 })
      await lastName.type('')

      await fistName.click({ clickCount: 3 })
      await fistName.type('')

      await username.click({ clickCount: 3 })
      await username.type('')

      await email.click({ clickCount: 3 })
      await email.type('')

      await password.click({ clickCount: 3 })
      await password.type('')

      await confirmPassword.click({ clickCount: 3 })
      await confirmPassword.type('')

      await username.click({ clickCount: 3 })

      expect(await page.$eval('#usernameError2', el => el.innerHTML))
        .eql('Un pseudonyme est requis')

      expect(await page.$eval('#emailRequired', el => el.innerHTML))
        .eql('Une adresse email est requise')

      expect(await page.$eval('#passwordRequired', el => el.innerHTML))
        .eql('Un mot de passe est requis')

      expect(await page.$eval('#confirmPasswordError', el => el.innerHTML))
        .eql('Veuillez confirmer votre mot de passe')

      expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(true)
    })

    it('it should display an error if the username or email alreay exists', async () => {
      const username = await page.$('#username')
      const lastName = await page.$('#lastNameInput')
      const fistName = await page.$('#fistNameInput')
      const email = await page.$('#inputEmail')
      const password = await page.$('#inputPassword')
      const confirmPassword = await page.$('#PasswordConfirm')
      const submit = await page.$('#submitBtn')

      await lastName.click({ clickCount: 3 })
      await lastName.type(user.split('').reverse().join(''))

      await fistName.click({ clickCount: 3 })
      await fistName.type(user.split('').sort(() => Math.random() - 0.5).join(''))

      await username.click({ clickCount: 3 })
      await username.type(user)

      await email.click({ clickCount: 3 })
      await email.type(`${user}@gmail.com`)

      await password.click({ clickCount: 3 })
      await password.type('toto')

      await confirmPassword.click({ clickCount: 3 })
      await confirmPassword.type('toto')

      expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(false)

      await submit.click()

      await page.waitFor(1000)

      expect(await page.$eval('#errorMessage', e => e.innerText)).eql('Création de compte échouée !')

      await page.waitFor(1000)

      expect(page.url()).eql('http://localhost:4200/register')
    })
  })
})
