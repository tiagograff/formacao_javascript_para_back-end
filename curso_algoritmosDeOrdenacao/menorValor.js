const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial){
    let atual = 0;
    let maisBarato = posicaoInicial;
    
    for (atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual;
        }
    }
    return maisBarato
}

module.exports = menorValor;