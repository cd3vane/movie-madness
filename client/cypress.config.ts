import { defineConfig } from "cypress";
import { configurePlugin } from "cypress-mongodb";

/**
 * @type {Cypress.PluginConfig}
 */
export default defineConfig({
  env: {
    mongodb: {
      uri: "mongodb://localhost:27017",
      database: "database_name",
      collection: "collection_name",
    },
  },
  e2e: {
    setupNodeEvents(on) {
      configurePlugin(on);
    },
    baseUrl: "http://localhost:3000",
  },
});
