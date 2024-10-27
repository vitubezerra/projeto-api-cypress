import { faker } from '@faker-js/faker'

describe('Realiza o cadastro de usuário com sucesso', () => {

    const nomeUsuarioAdm =  faker.person.fullName()
    const emailUsuarioAdm =  faker.internet.email()
    const senhaUsuarioAdm =  faker.internet.password()

    const nomeUsuario =  faker.person.fullName()
    const emailUsuario =  faker.internet.email()
    const senhaUsuario =  faker.internet.password()

    it('Realiza cadastro de usuário administrativo', () => {

        cy.realizaCadastroAdm(nomeUsuarioAdm, emailUsuarioAdm, senhaUsuarioAdm)
            .then((response_cadastro) => {
                expect(response_cadastro.status).equal(201)
                expect(response_cadastro.body.message).equal('Cadastro realizado com sucesso')
                expect(response_cadastro.body._id).equal(response_cadastro.body._id)
        })
    })

    
    it('Realiza cadastro de usuário padrão', () => {

        cy.realizaCadastro(nomeUsuario, emailUsuario, senhaUsuario)
            .then((response_cadastro) => {
                expect(response_cadastro.status).equal(201)
                expect(response_cadastro.body.message).equal('Cadastro realizado com sucesso')
                expect(response_cadastro.body._id).equal(response_cadastro.body._id)
        })
    })
})