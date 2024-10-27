/// <reference types="cypress" />

Cypress.Commands.add('editaUsuarioCadastrado', (id, nome, email, senha) => {
    cy.request({
        method: 'PUT',
        url: `/usuarios/${id}`,
        failOnStatusCode: false,
        body: {
            "nome": nome,
            "email": email,
            "password": senha,
            "administrador": "true"
          }
    }).then((response_edita) => { return response_edita })
})