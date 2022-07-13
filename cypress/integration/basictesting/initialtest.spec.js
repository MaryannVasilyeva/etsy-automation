/// <reference types="cypress" />

describe('Initial Test', () => {
    it('Testing landing page', () => {
        cy.visit('/')
        cy.url().should('eq', 'https://www.etsy.com/')
        cy.get('span.wt-screen-reader-only').contains('Etsy')
        cy.get('button.select-signin').contains('Sign in')
        // ---- Navigation Menu ----
        cy.get('ul.wt-list-unstyled.wt-grid__item-xs-12.wt-body-max-width.wt-display-flex-xs.wt-justify-content-space-between').children().then(($li) => {
            expect($li[0]).to.contain('Summer Clothing & Accessories')
            expect($li[1]).to.contain('Jewelry & Accessories')
            expect($li[2]).to.contain('Clothing & Shoes')
            expect($li[3]).to.contain('Home & Living')
            expect($li[4]).to.contain('Wedding & Party')
            expect($li[5]).to.contain('Toys & Entertainment')
            expect($li[6]).to.contain('Art & Collectibles')
            expect($li[7]).to.contain('Craft Supplies')
            expect($li[8]).to.contain('Gifts & Gift Cards')
        })
        // ---- Search Input ----
        cy.get('#global-enhancements-search-query').then(($input) => {
            cy.get($input).invoke('attr', 'placeholder').should('contain', 'Search for anything')
            cy.get($input).type('coffee mug')
        })
        // ---- Search Button ----
        cy.get('[data-id="gnav-search-submit-button"]').then(($btn) => {
            cy.get($btn).click()
            cy.url('/').should('contain', 'coffee').and('contain', 'mug')
        })
        // ---- Search Filters ----
        cy.get('.wt-pr-xs-1 > .wt-menu > .wt-menu__trigger > .etsy-icon > svg').click()
        cy.get('#edd_select_tf').select('By Aug 8')
        cy.get('#search-filter-button').click()
            .then(() => {
                cy.get('#search-filters-overlay').then(($sfo) => {
                    expect($sfo).to.have.class('wt-overlay--will-animate')
                    cy.get('#edd-custom-radio-input').should('be.checked')
                    cy.get('select#edd_select > option').then(($sel) => {
                        cy.get($sel).contains('By Aug 8').then(($opt) => {
                            expect($opt).to.be.selected
                        })
                    })
                })
            })
    })
})

