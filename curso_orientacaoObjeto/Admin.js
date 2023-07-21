import User from './User.js';

class Admin extends User {
    constructor(name, email, nascimento, role = 'admin', ativo = true) {
        super(name, email, nascimento, role, ativo);
    }

    criarCurso(nomeDoCurso, vagas) {
        return `curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin('rodrigo', 'rodrigo@gmail', '2021/02/02');
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos()); 
console.log(novoAdmin.criarCurso('JS', 20));