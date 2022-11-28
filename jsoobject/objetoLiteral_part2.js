const user = {
    nome: "Genesio",
    email: "email@email.com",
    nascimento: "2000/30/01",
    role: "estudante",
    ativo: true,

    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Pablo",
    email: "admin@email.com",
    role: "admin",
    criarCurso() {
        console.log('Curso criado');
    }
    
}

Object.setPrototypeOf(admin, user);

admin.criarCurso()
admin.exibirInfos()