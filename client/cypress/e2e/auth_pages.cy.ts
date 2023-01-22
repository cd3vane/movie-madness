describe("Auth flows", () => {
  it("logs in user and redirects to dashboard", () => {
    cy.login();
    cy.url().should("include", "/account/dashboard");
    cy.get("h1").should("include.text", "signed in version");
  });

  it.only("registers a new user", () => {
    cy.visit("/register");
    cy.get("#username").type("testergui");
    cy.get("#email").type("test@gmail.com");
    cy.get("#password").type("test1234");
    cy.get("#password2").type("test1234");
    cy.get("#submit").click();
    cy.url().should("include", "/account/dashboard");
    cy.get("h1").should("include.text", "signed in version");
  });
});
