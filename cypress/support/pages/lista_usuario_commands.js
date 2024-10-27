/// <reference types="cypress" />

Cypress.Commands.add('listaUsuario', (id) => {
    cy.request({
        method: 'GET',
        url: `/usuarios?_id=${id}`,
        failOnStatusCode: false,
    }).then((response_get) => { return response_get })
})