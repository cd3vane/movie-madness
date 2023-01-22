import { defineConfig } from "cypress";

/**
 * @type {Cypress.PluginConfig}
 */
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
