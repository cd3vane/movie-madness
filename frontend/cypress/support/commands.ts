/// <reference types="cypress" />

Cypress.Commands.add("login", () => {
  cy.visit("/login");
  cy.get("#email").type("test@gmail.com");
  cy.get("#password").type("test1234");
  cy.get("#login-btn").click();
});
