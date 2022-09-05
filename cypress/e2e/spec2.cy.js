describe('second spec', () => {
    
    it('should visit absolute path', () => {
	cy.visit('https://www.cgarbs.de/')
	cy.get('h1').should('have.text', 'Master Mitch - Startseite')
    })

    it('should visit relative path', () => {
	// see e2e.baseUrl in cypress.config.js
	cy.visit('/')
	cy.get('h1').should('have.text', 'Master Mitch - Startseite')
    })

    it('should link to blog', () => {
	cy.visit('/')

	const linkToBlog = cy.get('header nav a:first-of-type')
	linkToBlog.should('have.text', 'blog')
	linkToBlog.click()

	cy.title().should('eq', 'Mitch’s Manga Blog')
	cy.get('header h1').should('have.text', 'Mitch’s Manga Blog')
    })
})
