describe('template spec', () => {
  it('Loads Home Page', () => {
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "first" and click it
    cy.get('a[href*="/first"]').click()
 
    // The new url should include "/first"
    cy.url().should('include', '/first')

    // Find a link with an href attribute containing "second" and click it
    cy.get('a[href*="/second"]').click()
 
    // The new url should include "/first"
    cy.url().should('include', '/second')

    // Find a link with an href attribute containing "home" and click it
    cy.get('a[href*="/home"]').click()
 
    // The new url should include "/first"
    cy.url().should('include', '/home')
  })
})