describe("SVG Element Test", () => {
    it("passes", () => {
        cy.visit("http://localhost:3000");

        // Inspired by this example https://glebbahmutov.com/cypress-examples/recipes/svg-example.html
        // Get the SVG element
        cy.get('svg')
            .should('have.attr', 'width', '90')
            .and('have.attr', 'height', '90');

        // Check attributes of the first <path> element
        cy.get('svg path').first()
            .should('have.attr', 'fill', '#f70');

        // Check the stroke attributes of the second <path> element
        cy.get('svg path[fill="none"]')
            .should('have.attr', 'stroke', '#024')
            .and('have.attr', 'stroke-width', '21')
            .and('have.attr', 'stroke-linejoin', 'bevel');

        // Optionally, wait for a brief period for clarity
        cy.wait(1000);

        // Change the color of the first "path" element
        cy.get('svg path').first()
            .invoke('attr', 'fill', 'red');

        // Check if the color of the first "path" element has changed
        cy.get('svg path').first()
            .should('have.attr', 'fill', 'red');

        // Check for the presence of specific elements or paths
        // For example, check if a certain path with a specific 'd' attribute exists
        cy.get('svg path[d="M0 370q0 56 56 56h314q56 0 56-56V56q0-56-56-56H56q-56 0-56 56"]')
            .should('exist');
        
        // Add more tests as needed, depending on what aspects of the SVG you want to verify
    });
});
