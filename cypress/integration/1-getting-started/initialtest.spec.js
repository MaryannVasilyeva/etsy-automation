/// <reference types="cypress" />

describe('Initial Test', () => {
    before('visit website', ()=> {
        cy.visit('https://www.etsy.com/')
    })
    it('first test', ()=> {
        //cy.get('.wt-pb-xs-1 wt-pb-lg-0 wt-pt-sm-1 wt-pt-lg-0 wt-pr-xs-0 wt-pr-sm-1 > span.wt-screen-reader-only').should('have.text', 'Etsy')
        cy.get('input#global-enhancements-search-query').isTrue(true, 'this val is true')

    })
    it('second test', ()=> {
        
    })
    it('third test', ()=> {
        
    })
})

