//cypress.config.js

const { defineConfig } = require("cypress");


module.exports = defineConfig({

reporter: 'cypress-mochawesome-reporter',

e2e: {

setupNodeEvents(on, config) {

require('cypress-mochawesome-reporter/plugin')(on);

},

},

defaultCommandTimeout: 10000,
viewportWidth: 1920,
viewportHeight: 1080,

})