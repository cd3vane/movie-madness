describe("Landing page", () => {
  it("renders and has navbar", () => {
    cy.visit("/");
    cy.get("nav").should("be.visible");
  });

  it("has a discover page that populates movies", () => {
    cy.visit("/discover");
    cy.get("#movie-item").should("be.visible");
  });

  it("has a profile list with at least one user ", () => {
    cy.visit("/profiles");
    cy.get(".profiles").should("be.visible");
  });
});
