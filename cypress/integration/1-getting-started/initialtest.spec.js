/// <reference types="cypress" />

describe('Initial Test', () => {
    it('visit website', ()=> {
        cy.visit('https://www.etsy.com/')
    })
})

