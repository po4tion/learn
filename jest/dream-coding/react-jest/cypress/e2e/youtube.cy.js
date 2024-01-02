describe("Youtube", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visit main page", () => {
    cy.findByText("Youtube").should("exist");
  });
});
