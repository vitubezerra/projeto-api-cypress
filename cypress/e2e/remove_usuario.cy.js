import { faker } from '@faker-js/faker'

describe('Realizar a remoção de usuário com sucesso', () => {

    const nomeUsuarioAdm =  faker.person.fullName()
    const emailUsuarioAdm =  faker.internet.email()
    const senhaUsuarioAdm =  faker.internet.password()

    const nomeUsuario =  faker.person.fullName()
    const emailUsuario =  faker.internet.email()
    const senhaUsuario =  faker.internet.password()

    it('Realiza a remoção de usuário administrativo', () => {

        cy.realizaCadastroAdm(nomeUsuario, emailUsuario, senhaUsuario).then((response_cadastro) => {
        cy.removeUsuario(response_cadastro.body._id)
            .then((response_delete) => {
                expect(response_delete.status).equal(200)
                expect(response_delete.body.message).equal('Registro excluído com sucesso')
            })
        })
    })

    it('Realiza a remoção de usuário padrão', () => {
    
            cy.realizaCadastro(nomeUsuario, emailUsuario, senhaUsuario).then((response_cadastro) => {
            cy.removeUsuario(response_cadastro.body._id)
                .then((response_delete) => {
                    expect(response_delete.status).equal(200)
                    expect(response_delete.body.message).equal('Registro excluído com sucesso')
                })
            })
        })
})