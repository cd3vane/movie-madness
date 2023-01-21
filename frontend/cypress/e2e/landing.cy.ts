describe("Landing page", () => {
  it("renders and has navbar", () => {
    cy.visit("/");
    cy.get("nav").should("be.visible");
  });
});
