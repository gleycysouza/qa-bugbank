import { defineConfig } from 'cypress'
import * as dotenv from 'dotenv'

// Configurar dotenv com logs suprimidos
dotenv.config({ 
    path: '.env',
    quiet: true 
})

// Configurar SSL para desenvolvimento local
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin')
export default defineConfig({
    e2e: {
        defaultCommandTimeout: 10000,
        pageLoadTimeout: 60000,
        requestTimeout: 15000,
        responseTimeout: 15000,
        setupNodeEvents(on, config) {
            registerReportPortalPlugin(on, config)
            return config
        }
    },
    reporter: '@reportportal/agent-js-cypress',
    reporterOptions: {
        endpoint: process.env.REPORT_PORTAL_API_URL,      
        apiKey: process.env.REPORT_PORTAL_API_TOKEN,      
        launch: process.env.REPORT_PORTAL_LAUNCH_NAME,   
        project: process.env.REPORT_PORTAL_PROJECT_NAME,
        autoMerge: true, 
        rerun: true,                                     
        rerunOfLaunch: process.env.REPORT_PORTAL_ID_REEXECUCAO, 
        attributes: [{ key: 'branch', value: 'master' }]
    }
})
