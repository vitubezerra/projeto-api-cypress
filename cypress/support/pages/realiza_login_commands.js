/// <reference types="cypress" />

Cypress.Commands.add('realizaLogin', (email, senha) => {
    cy.request({
        method: 'POST',
        url: '/login',
        failOnStatusCode: false,
        body: {
            "email": email,
            "password": senha,
          }
    }).then((response_login) => { return response_login })
})