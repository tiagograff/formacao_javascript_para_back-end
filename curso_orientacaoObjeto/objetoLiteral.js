const user = {
    nome: 'juliana',
    email: 'juliana@gmail.com',
    nascimento: '2021/01/01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function (){
        console.log(this.nome, this.email, this.role,this.nascimento, this.ativo);
    }
}

// user.exibirInfos();
// // const exibir = user.exibirInfos
// // exibir();

// const exibir = function () {
//     console.log(this.nome);
// };

// const exibirNome = exibir.bind(user);
// exibir();
// exibirNome();

const admin = {
    nome: 'mariana',
    email: 'mariana@gmail.com',
    nascimento: '2021/02/02',
    role: 'admin',
    ativo: true,
    criarCurso(){
        console.log('curso criados');
    }
}

Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();