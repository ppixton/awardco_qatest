describe('Check Image Visibility', () => {
  it('', () => {
    cy.visit('www.award.co')

    cy.get('img').should('have.attr', 'alt')

    cy.get('img').should(($img) => $img.map((i,img) => expect(img.naturalWidth).to.be.greaterThan(0)))

  })
})