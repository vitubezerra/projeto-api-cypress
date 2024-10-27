import { faker } from '@faker-js/faker'

describe('Realizar a edição de usuário cadastrado com sucesso', () => {

    const nomeUsuarioAdm =  faker.person.fullName()
    const emailUsuarioAdm =  faker.internet.email()
    const senhaUsuarioAdm =  faker.internet.password()

    const nomeUsuario =  faker.person.fullName()
    const emailUsuario =  faker.internet.email()
    const senhaUsuario =  faker.internet.password()

    const nomeUsuarioAdmEditado =  faker.person.fullName()
    const emailUsuarioAdmEditado =  faker.internet.email()
    const senhaUsuarioAdmEditado =  faker.internet.password()

    const nomeUsuarioEditado =  faker.person.fullName()
    const emailUsuarioEditado =  faker.internet.email()
    const senhaUsuarioEditado =  faker.internet.password()

    it('Realiza edição de usuário administrativo', () => {

        cy.realizaCadastroAdm(nomeUsuarioAdm, emailUsuarioAdm, senhaUsuarioAdm).then((response_cadastro_adm) => {
        cy.editaUsuarioCadastrado(response_cadastro_adm.body._id, nomeUsuarioAdmEditado, emailUsuarioAdmEditado, senhaUsuarioAdmEditado)
            .then((response_edita) => {
                expect(response_edita.status).equal(200)
                expect(response_edita.body.message).equal('Registro alterado com sucesso')
            })
        })
    })

    it('Realiza edição de usuário padrão', () => {

        cy.realizaCadastro(nomeUsuario, emailUsuario, senhaUsuario).then((response_cadastro) => {
        cy.editaUsuarioCadastrado(response_cadastro.body._id, nomeUsuarioEditado, emailUsuarioEditado, senhaUsuarioEditado)
            .then((response_edita) => {
                expect(response_edita.status).equal(200)
                expect(response_edita.body.message).equal('Registro alterado com sucesso')
            })
        })
    })
})