const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['1155555550', '1155555551']
}

cliente.enderecos = [
    {
        rua: 'josef climber',
        numero: 1337,
        apartamento: true,
        complemento: 'ap 934'
    }
]

cliente.enderecos.push({
    rua: 'cliember josef',
    numero: 7331,
    apartamento: false,
    complemento: 'casa'
})

const listaApenasApartamentos = cliente.enderecos.filter(endereco => endereco.apartamento === true)
console.log(listaApenasApartamentos)