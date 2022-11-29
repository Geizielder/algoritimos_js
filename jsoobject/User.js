export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome() {
        return this.#nome
    }
    get email() {
        return this.#email
    }
    get nascimento() {
        return this.#nascimento
    }
    get role() {
        return this.#role
    }
    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('Formato não válido')
        }
        this.#nome = novoNome
    }
    set email(novoEmail) {
        this.#email = novoEmail
    }
    set nascimento(novoData) {
        this.#nascimento = novoData
    }
    set role(novoRole) {
        this.#role = novoRole
    }
    set ativo(novoAtivo) {
        this.#ativo = novoAtivo
    }
   
    exibirInfos() {
        const objUser = this
        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`
    }
}
