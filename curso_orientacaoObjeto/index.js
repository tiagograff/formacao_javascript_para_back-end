import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

const novoUsuario = new User('joana', 'joana@gmail.com', '2000/03/04');
console.log(novoUsuario.exibirInfos());

// novoUsuario.#email = 'joana@gmail.com';

// console.log(novoUsuario.#montaObjetoUser());

const novoAdmin = new Admin('rodrigo','r@r.com','2023/07/21');
console.log(novoAdmin.nome);
novoAdmin.nome = '';
console.log(novoAdmin.nome);

const novoDocente = new Docente('guilherme','gui@guilherme.com', '2023/07/2023');
console.log(novoDocente.exibirInfos());