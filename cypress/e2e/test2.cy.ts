describe("template spec", () => {
    it("passes", () => {
        cy.visit("http://localhost:3000")
        cy.get('[data-testid="testing-app-title"]').should("exist")
        .should("have.text", "Cypress Testing")
    })
})