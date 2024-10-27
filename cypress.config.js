const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto-api-cypress',
      reportPageTitle: 'Projeto-api-cypress',
      reportDir: 'cypress/reports',
      overwrite: true,
      html: true,
      json: true,
    },
    baseUrl: 'https://serverest.dev',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});