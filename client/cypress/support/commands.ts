/// <reference types="cypress" />

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get("#login-btn").click();
});

Cypress.Commands.add("logout", () => {
  cy.get("#user-menu").click();
  cy.get(".sign-out").should("have.text", "Sign out").click();
});
