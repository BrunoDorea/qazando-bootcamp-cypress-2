/// <reference types="cypress" />
// feature
describe('Login', () => {
    // cenários
    it('login com sucesso', () => {
        // acessar o site - tela de login
        cy.visit('/login')
        
        // digitar user, senha e apertar o botão de login
        cy.get('#user').type('bruno@qazando.com.br')
        cy.get('#password').type('123456')

        cy.get('#btnLogin').click()
        
        // verificar login bem sucedido
        cy.url().should('include', '/my-account')
    })

    it('assinar newsletter', () => {
        // acessar o site - tela inicial
        cy.visit('/')

        // digitar email e clicar no botão
        cy.get('.form-control').type('bruno@qazando.com.br{enter}')

    })
    
})