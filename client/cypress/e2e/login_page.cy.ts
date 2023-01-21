describe("Login functionality", () => {
  it.only("logs in user and redirects to dashboard", () => {
    cy.login();
    cy.url().should("include", "/account/dashboard");
    cy.get("h1").should("include.text", "signed in version");
  });
});
