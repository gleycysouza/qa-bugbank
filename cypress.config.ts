import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        defaultCommandTimeout: 10000,
        pageLoadTimeout: 60000,
        requestTimeout: 15000,
        responseTimeout: 15000,
        setupNodeEvents(on, config) {
            // plugins, se precisar
        }
    }
})
