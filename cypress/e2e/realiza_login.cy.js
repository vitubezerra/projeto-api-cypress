import { faker } from '@faker-js/faker'

describe('Realizar o login com sucesso', () => {

    const nomeUsuarioAdm =  faker.person.fullName()
    const emailUsuarioAdm =  faker.internet.email()
    const senhaUsuarioAdm =  faker.internet.password()

    const nomeUsuario =  faker.person.fullName()
    const emailUsuario =  faker.internet.email()
    const senhaUsuario =  faker.internet.password()

    it('Realiza login com usuário administrativo', () => {

        cy.realizaCadastroAdm(nomeUsuarioAdm, emailUsuarioAdm, senhaUsuarioAdm).then((response_cadastro_adm) => {
            cy.realizaLogin(emailUsuarioAdm, senhaUsuarioAdm)
                .then((response_login) => {
                    expect(response_login.status).equal(200)
                    expect(response_login.body.message).equal('Login realizado com sucesso')
                    expect(response_login.body.authorization).equal(response_login.body.authorization)
            })
        })
    })

    it('Realiza login com usuário padrão', () => {

        cy.realizaCadastro(nomeUsuario, emailUsuario, senhaUsuario).then((response_cadastro) => {
            cy.realizaLogin(emailUsuario, senhaUsuario)
                .then((response_login) => {
                    expect(response_login.status).equal(200)
                    expect(response_login.body.message).equal('Login realizado com sucesso')
                    expect(response_login.body.authorization).equal(response_login.body.authorization)
            })
        })
    })
})