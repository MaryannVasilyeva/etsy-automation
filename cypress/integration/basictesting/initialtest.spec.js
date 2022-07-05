/// <reference types="cypress" />

describe('Initial Test', () => {
    it('Testing landing page', ()=> {
        cy.visit('https://www.etsy.com/')
        cy.get('span.wt-screen-reader-only').contains('Etsy')
        cy.log('DONE!')
    })
})

