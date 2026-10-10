
import { driver } from '@wdio/globals'

export const hooksConf = {
    afterTest: async function () {
        try {
            await driver.takeScreenshot()
        } catch (error) {
            console.warn('Não foi possível capturar screenshot:', error.message)
        }
    }
}
