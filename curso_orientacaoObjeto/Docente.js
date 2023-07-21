import User from './User.js';

class Docente extends User {
    constructor(name, email, nascimento, role = 'docente', ativo = true) {
        super(name, email, nascimento, role, ativo);
    }

    aprovaEstudante(estudante, curso){
    return `estudante ${estudante} passou no curso ${curso}`;
    }
}

const novoDocente = new Docente('mariana', 'mariana@gmail.com', '21/03/04');
console.log(novoDocente);
console.log(novoDocente.aprovaEstudante('juliana', 'JS'));