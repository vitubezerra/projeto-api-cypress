/// <reference types="cypress" />

Cypress.Commands.add('realizaCadastroAdm', (nome, email, senha) => {
    cy.request({
        method: 'POST',
        url: '/usuarios',
        failOnStatusCode: false,
        body: {
            "nome": nome,
            "email": email,
            "password": senha,
            "administrador": "true"
          }
    }).then((response_cadastro_adm) => { return response_cadastro_adm })
})

Cypress.Commands.add('realizaCadastro', (nome, email, senha) => {
    cy.request({
        method: 'POST',
        url: '/usuarios',
        failOnStatusCode: false,
        body: {
            "nome": nome,
            "email": email,
            "password": senha,
            "administrador": "false"
          }
    }).then((response_cadastro) => { return response_cadastro })
})