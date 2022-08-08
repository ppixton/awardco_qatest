describe('Checks Links', () => {
  it('Checks the links on the page', () => {
    cy.visit('www.award.co')
    
    cy.get('a').each(page => {
      cy.request(page.prop('href'))
    })
  })
})