describe('Check Titles and Descriptions', () => {
  it('Looks for page titles and meta descriptions on all specified pages to improve SEO optimization', () => {
    const pages = ['www.award.co', 'www.award.co/recognize', 'www.award.co/celebrate', 'www.award.co/earn', 'www.award.co/reward']
    
    pages.forEach(page => {
      cy.visit(page)
      cy.title().should('exist')
      cy.document().get('head meta[name="description"]').should('exist')
    })
    
  })
})