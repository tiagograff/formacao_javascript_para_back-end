const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  }
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ]

function ligaParaCliente(telefoneComercial, telefonePessoal){
    console.log(`ligando para ${telefonePessoal}`)
    console.log(`ligando para ${telefoneComercial}`)
}

ligaParaCliente(...cliente.telefone)

// const encomenda = {
//     nome: 'cliente',
//     rua: cliente.enderecos[0].rua = 'algum lugar no mundo',
//     numero: cliente.enderecos[0].numero = '1'
// }
const encomenda = {
    nome: 'cliente',
    ...cliente.enderecos[0]
}
console.log(encomenda)