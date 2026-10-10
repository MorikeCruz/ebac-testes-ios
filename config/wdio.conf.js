import { localConf } from './local.conf.js'
import { sauceConf } from './sauce.conf.js'
import 'dotenv/config'

const environment = process.env.ENVIRONMENT || 'local'

function getConfig() {
    switch (environment.toLowerCase()) {
        case 'local':
            return localConf

        case 'saucelabs':
            return sauceConf

        default:
            throw new Error(
                `Ambiente "${environment}" inválido. Use "local" ou "saucelabs".`
            )
    }
}

export const config = getConfig()