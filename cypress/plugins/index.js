<<<<<<< HEAD
/// <reference types="cypress"/>

=======
/// <reference types="cypress" />
>>>>>>> master
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

<<<<<<< HEAD
// eslint-disable-next-line @typescript-eslint/no-var-requires
const wp = require("@cypress/webpack-preprocessor")


=======
>>>>>>> master
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
<<<<<<< HEAD


/**
* @type {Cypress.PluginConfig}
*/
module.exports = (on, config) => {
  const options = {
    webpackOptions: require("../../webpack.config")
  }

  on("file:preprocessor", wp(options))
}
=======
>>>>>>> master
