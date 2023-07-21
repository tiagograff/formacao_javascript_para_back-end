export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome){
        if(novoNome !== ''){
            this.#nome = novoNome;
        }else{
            console.log('formato nao valido');
        }
    }

    set email(novoEmail){
        this.#email = novoEmail;
    }

    set nascimento(novoNascimento){
        this.#nascimento = novoNascimento;
    }

    set role(novoRole){
        this.#role = novoRole;
    }

    set ativo(novoAtivo){
        this.#ativo = novoAtivo;
    }

    exibirInfos(){
        return` ${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }

}

// const novoUser = new User('juliana','juliana@gmail.com','','2021/01/01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));