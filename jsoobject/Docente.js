import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
       return `estudante ${estudante} aprovado no curso ${curso}.`
    }
}

const novoDocente = new Docente('Maneco', 'maneco@email.com', '1999-10-12');

console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Baltazar', 'JS'));
