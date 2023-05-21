//tipo string

const texto1 = "ola, mundo!";
const texto2 = 'ola, mundo!';
const senha = "senhaSuperSegura1234";
const strindNumeros = "34567";

// citacao

const citacao = 'o leo disse "oi"';
console.log(citacao);

//concatenacao

const nome = "tiago graffunder";
const concatacao = "meu nome é: "+ nome;//
console.log(concatacao);

//outros

const cidade = "belo horizonte";
const input = "Belo Horizonte";
console.log(cidade === input); // false

const cidade2= "belo horizonte";
const input2 = "Belo Horizonte";
const inputMinusculo = input2.toLowerCase();
console.log(cidade2 === inputMinusculo); // true

const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres
