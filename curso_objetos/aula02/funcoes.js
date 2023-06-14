const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200.00,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log('saldo insuficiente')
        }else{
            this.saldo -= valor
            console.log(`pagamento realizado, novo saldo ${this.saldo}`)
        }
        return this.saldo
    }
  }

cliente.efetuaPagamento(250.00).toFixed(2)