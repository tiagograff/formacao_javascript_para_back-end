const livros = require('./listaLivros');

let atual = 0;
let maisBarato = 0;

for (atual = 0; atual < livros.length; atual++){
    if (livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual;
    }
}

console.log(livros[maisBarato]);