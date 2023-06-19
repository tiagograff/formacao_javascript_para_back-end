const clientes = require('./cliente.json')

function apSemComplemento (clientes){
    return clientes.filter((cliente) =>{
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty('complemento'))
    })
}

const filtrado = apSemComplemento(clientes)
console.log(filtrado)