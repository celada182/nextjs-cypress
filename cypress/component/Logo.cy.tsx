import Logo from "@/app/components/Logo"

describe('<Logo />', () => {
  it('should render and display expected content', () => {
    // Mount the React component
    cy.mount(<Logo />)

    // Image
    cy.get('img')
      .should('be.visible')
      .should('have.attr', 'src', '/next.svg')
  })
})