/// <reference types="cypress" />

Cypress.Commands.add('removeUsuario', (id) => {
    cy.request({
        method: 'DELETE',
        url: `/usuarios/${id}`,
        failOnStatusCode: false,
    })
})