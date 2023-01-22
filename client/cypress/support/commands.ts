/// <reference types="cypress" />

Cypress.Commands.add("login", () => {
  cy.visit("/login");
  cy.get("#email").type("testing@gmail.com");
  cy.get("#password").type("test1234");
  cy.get("#login-btn").click();
});
