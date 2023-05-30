const cliente = {
    nome: 'andre',
    idade: 32,
    cpf: '1122233345',
    email: 'andre@andre'
}

console.log(`o nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`)

console.log(`os três primeiros digitos do cpf são ${cliente.cpf.substring(0,3)}`)