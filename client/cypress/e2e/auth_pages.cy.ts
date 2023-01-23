describe("Auth flows", () => {
  it("logs in user and redirects to dashboard", () => {
    cy.login();
    cy.url().should("include", "/account/dashboard");
    cy.get("h1").should("include.text", "signed in version");
  });

  it("fails when passwords are not the same", () => {
    cy.visit("/register", {
      onBeforeLoad(win) {
        cy.stub(win.console, "log").as("consoleLog");
        cy.stub(win.console, "error").as("consoleError");
      },
    });
    cy.get("#username").type("testerguy");
    cy.get("#email").type("testing2@gmail.com");
    cy.get("#password").type("test123");
    cy.get("#password2").type("test1234");
    cy.get("#submit").click();
    cy.get("#alert")
      .should("exist")
      .should("have.text", "Passwords are not the same");
  });

  it("registers a new user", () => {
    cy.visit("/register");
    cy.get("#username").type("testerguy");
    cy.get("#email").type("testing2@gmail.com");
    cy.get("#password").type("test1234");
    cy.get("#password2").type("test1234");
    cy.get("#submit").click();
    cy.get("#alert")
      .should("exist")
      .should("have.text", "Successfully registered testerguy");
    cy.get("#firstname").type("tester");
    cy.get("#lastname").type("Guy");
    cy.get("#submit").click();
    cy.get("#alert")
      .should("exist")
      .should("have.text", "Successfully updated profile");
  });

  
});
