// Carrega os tipos do cypress
/// <reference types="cypress" />

describe('Teste Blaze Demo', () => {

    beforeEach(() => {
        cy.visit('/')

    });

    it('Teste do Fluxo de Compra', () => {

        cy.get('h1')
            .should('have.text', 'Welcome to the Simple Travel Agency!')

        cy.get('select[name="fromPort"]')
            .select('São Paolo')

        cy.get('select[name="toPort"]')
            .select('Rome')

        cy.get('input[type="submit"]')
            .should('have.value', 'Find Flights')
            .click()

        //carrega a página de lista de vôos

        cy.get('h3')
            .should('have.text', 'Flights from São Paolo to Rome: ')

        cy.get('tbody tr:nth-child(2) > td:nth-child(3)')
            .should('have.text', '234')

        cy.get('table tbody > tr:nth-child(2) > td:nth-child(2) > input')
            .click()

        //carrega a página de pagamento

        cy.get('h2')
            .should('have.text', 'Your flight from TLV to SFO has been reserved.')

        cy.get('#inputName')
            .type('Vincent V. Gogh')

        cy.get('#address')
            .type('Rua Augusta')

        cy.get('#city')
            .type('São Paulo')

        cy.get('#state')
            .type('São Paulo')

        cy.get('#zipCode')
            .type('1304002')

        cy.get('#creditCardNumber')
            .type('12345678910121316')

        cy.get('#creditCardMonth')
            .type('09')

        cy.get('#creditCardYear')
            .type('2020')

        cy.get('#nameOnCard')
            .type('Vincent V. Gogh')

        cy.get('#rememberMe')
            .click()

        cy.get('input[value="Purchase Flight"]')
            .click()

        //carrega página de confirmação da compra

        cy.get('h1')
            .should('have.text', 'Thank you for your purchase today!')

    });

    afterEach(() => {

        cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)')
            .click()

    });

});