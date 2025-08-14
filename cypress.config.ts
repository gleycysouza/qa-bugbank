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
    },
    reporter: '@reportportal/agent-js-cypress',
    reporterOptions: {
        endpoint: 'http://localhost:8080/api/v1',
        token: 'bugbank_1PegeeP4QbSTihfdU5htrotXtRj45P3RJf9xNrDuRd5WEvqgVRjigBaXEG4faYtU',
        launch: 'Testes BugBank',
        project: 'bugbank',
        attributes: [{ key: 'branch', value: 'master' }]
    }
})
