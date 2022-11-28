const user = {
    nome: "Genesio",
    email: "email@email.com",
    nascimento: "2000/30/01",
    role: "admin",
    ativo: true,

    exibirInfos: function() {
        console.log(this.nome, this.email, this.nascimento, this.role, this.ativo);
    }
}

user.exibirInfos();

// const exibir = user.exibirInfos;
// exibir()

const exibir = function() {
    console.log(this.nome);
}

const exibirNome = exibir.bind(user);

exibirNome()
exibir()