const { defineConfig } = require('cypress');

module.exports = defineConfig({
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
	configFile: 'reporter-config.json',
    },
    e2e: {
	baseUrl: 'https://www.cgarbs.de',
	video: false
    }
})
