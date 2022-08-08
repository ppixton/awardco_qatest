describe('Checks Site Availability', () => {
  it('Passes if able to access awardco site', () => {
    cy.visit('www.award.co')
  })
})