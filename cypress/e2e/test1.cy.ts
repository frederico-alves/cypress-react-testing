describe('Test 1', () => {
    it('Visits the React app', () => {
      cy.visit('http://localhost:3000')
      cy.contains('Cypress Testing')
    })
  })
  