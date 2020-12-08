const puppeteer = require('puppeteer')
const { expect } = require('chai')

describe('E2E TESTS FOR GROUPS PAGE', async () => {
  // slowMo: 20,
  let browser
  let page

  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      slowMo: 35,
      args: [
        '--window-size=1920,1080'
      ]
    })
  })

  beforeEach(async () => {
    page = await browser.newPage()
    await page.goto('http://localhost:4200/groups')
  })

  after(async () => {
    await browser.close()
  })

  describe('/POST Group', async () => {
    it('it should login a user', async () => {
      expect(await page.$eval('#formTitle', e => e.innerText)).to.eql('Se connecter à KotsApp')

      expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(true)

      const pseudo = await page.$('#pseudo')
      const password = await page.$('#password')
      const submit = await page.$('#submitBtn')

      await pseudo.click({ clickCount: 3 })
      await pseudo.type('larry@gmail.com')

      await password.click({ clickCount: 3 })
      await password.type('toto')

      expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(false)

      await submit.click()
      await page.waitForNavigation()

      expect(page.url()).eql('http://localhost:4200/groups')

      await page.waitFor(1000)
    })

    xit('it should create a group', async () => {
      await page.waitFor(2000)

      await page.click('[id="createGroupBtn"]')

      expect(await page.$eval('#createGroupSubmit', btn => btn.disabled)).eql(true)

      const groupName = await page.$('#groupName')
      const groupDescription = await page.$('#groupDescription')

      await page.waitFor(1000)

      await groupName.click({ clickCount: 3 })
      await groupName.type('test group name')

      await groupDescription.click({ clickCount: 3 })
      await groupDescription.type('test group description')

      expect(await page.$eval('#createGroupSubmit', btn => btn.disabled)).eql(false)

      await page.click('[id="createGroupSubmit"]')

      await page.waitFor(3000)
    })

    xit('it should update a group', async () => {
      await page.waitFor(2000)

      await page.click('[name="updateGroupBtn"]')

      expect(await page.$eval('#createGroupSubmit', btn => btn.disabled)).eql(true)

      const updateGroupName = await page.$('#updateGroupName')
      const updateGroupDescription = await page.$('#updateGroupDescription')

      await page.waitFor(1000)

      await updateGroupName.click({ clickCount: 3 })
      await updateGroupName.type('Updated test group')

      await updateGroupDescription.click({ clickCount: 3 })
      await updateGroupDescription.type('updated test group description !')

      expect(await page.$eval('#createGroupSubmit', btn => btn.disabled)).eql(false)

      await page.click('[id="updateGroupSubmit"]')

      await page.waitFor(3000)
    })

    xit('it should delete a group', async () => {
      await page.waitFor(1000)

      await page.click('[name="deleteGroupBtn"]')

      await page.waitFor(2000)

      await page.click('[id="deleteGroupSubmitBtn"]')

      await page.waitFor(3000)
    })

    it('it should get a group info', async () => {
      await page.waitFor(1000)

      await page.click('[id="golf"]')

      expect(await page.$eval('#addMemberSubmitBtn', btn => btn.disabled)).eql(true)

      const member = await page.$('#typeahead-member')

      await page.waitFor(1000)

      await member.click({ clickCount: 3 })
      await member.type('james')

      await page.waitFor(1000)

      await page.click('[id="ngb-typeahead-0-0"]')

      await page.click('[id="typeahead-member"]')

      await page.click('[id="addMemberSubmitBtn"]')

      await page.waitFor(3000)
    })

    it('it should add an item in a shopping list', async () => {
      await page.click('[id="golf"]')

      expect(await page.$eval('#addMemberSubmitBtn', btn => btn.disabled)).eql(true)

      await page.click('[id="quickNavigation"]')

      await page.waitFor(1000)

      await page.click('[id="shoppingListBtn"]')

      const item = await page.$('#typeahead-http')

      await page.waitFor(1000)

      await item.click({ clickCount: 3 })
      await item.type('Zen')

      await page.waitFor(1000)

      await page.click('[id="ngb-typeahead-1-0"]')

      // await page.click('[id="quantityInput"]');
      const quantityInput = await page.$('#quantityInput')
      await quantityInput.click({ clickCount: 3 })

      await page.click('[id="addProductBtn"]')

      await page.waitFor(3000)
    })
  })
})
