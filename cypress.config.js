const { defineConfig } = require('cypress');

module.exports = defineConfig({
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
	"reporterEnabled": "cypress-mochawesome-reporter, mocha-junit-reporter, spec",
	"mochaJunitReporterReporterOptions": {
	    "mochaFile": "cypress/results/results-[hash].xml"
	},
	"cypressMochawesomeReporterReporterOptions": {
	    "charts": true,
	    "reportPageTitle": "Demo Test Results"
	}
    },
    video: false,
    e2e: {
	baseUrl: 'https://www.cgarbs.de',
	setupNodeEvents(on, config) {
	    require('cypress-mochawesome-reporter/plugin')(on);
	},
    }
})
