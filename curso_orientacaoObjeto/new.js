function User(nome, email){

    this.nome = nome;
    this.email = email;

    this.exibirInfos = function(){ return ` ${this.nome} ${this.email}`};
}

// const novoUsuario = new User('juliana','juliana@gmail.com');
// console.log(novoUsuario.exibirInfos());

function Admin(role){
    User.call(this,'juliana','juliana@gmail.com');
    this.role = role || 'estudante';
}

Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin('admin')

console.log(novoUser.exibirInfos());
console.log(novoUser.role);

const user2 = {
    init: function(nome, email){
        this.nome = nome;
        this.email = email;
    },
    exibirInfos: function(){ return this.nome}
}

const novoUser2 = Object.create(user2);
novoUser2.init('juliana','j@gmail.com');
// console.log(novoUser2.exibirInfos('juliana'));
// console.log(user2.isPrototypeOf(novoUser2));
console.log(novoUser2.exibirInfos());
