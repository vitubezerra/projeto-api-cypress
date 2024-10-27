import { faker } from '@faker-js/faker'

describe('Realizar a listagem de usuário pelo ID com sucesso', () => {

    const nomeUsuarioAdm =  faker.person.fullName()
    const emailUsuarioAdm =  faker.internet.email()
    const senhaUsuarioAdm =  faker.internet.password()

    const nomeUsuario =  faker.person.fullName()
    const emailUsuario =  faker.internet.email()
    const senhaUsuario =  faker.internet.password()

    it('Realiza a listagem de usuário administrativo', () => {

        cy.realizaCadastroAdm(nomeUsuarioAdm, emailUsuarioAdm, senhaUsuarioAdm).then((response_cadastro) => {
        cy.listaUsuario(response_cadastro.body._id)
            .then((response_get) => {
                expect(response_get.status).equal(200)
                expect(response_get.body.usuarios[0].nome).equal(nomeUsuarioAdm)
                expect(response_get.body.usuarios[0].email).equal(emailUsuarioAdm)
                expect(response_get.body.usuarios[0].password).equal(senhaUsuarioAdm)
                expect(response_get.body.usuarios[0].administrador).equal('true')
                expect(response_get.body.usuarios[0]._id).equal(response_cadastro.body._id)
            })
        })
    })

    it('Realiza a listagem de usuário padrão', () => {

        const nomeUsuario =  faker.person.fullName()
        const emailUsuario =  faker.internet.email()
        const senhaUsuario =  faker.internet.password()
    
            cy.realizaCadastro(nomeUsuario, emailUsuario, senhaUsuario).then((response_cadastro) => {
            cy.listaUsuario(response_cadastro.body._id)
                .then((response_get) => {
                    expect(response_get.status).equal(200)
                    expect(response_get.body.usuarios[0].nome).equal(nomeUsuario)
                    expect(response_get.body.usuarios[0].email).equal(emailUsuario)
                    expect(response_get.body.usuarios[0].password).equal(senhaUsuario)
                    expect(response_get.body.usuarios[0].administrador).equal('false')
                    expect(response_get.body.usuarios[0]._id).equal(response_cadastro.body._id)
                })
            })
        })
})