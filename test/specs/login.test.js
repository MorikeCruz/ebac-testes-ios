
import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('Login - Loja EBAC', () => {
    it('deve realizar login com credenciais válidas', async () => {
        const email = process.env.TEST_USER_EMAIL
        const password = process.env.TEST_USER_PASSWORD

        if (!email || !password) {
            throw new Error(
                'Configure TEST_USER_EMAIL e TEST_USER_PASSWORD no ambiente.'
            )
        }

        const profileTab = driver.isAndroid ? 'profile' : 'Account'

        await homePage.openMenu(profileTab)
        await loginPage.login(email, password)
        await homePage.openMenu(profileTab)

        const profileName = await profilePage.profileName('EBAC Cliente')
        await expect(profileName).toBeDisplayed()
    })
})
