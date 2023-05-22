// tipo boolean

const numero1 = 5;
const numero2 = 10;
let cadastroAtivado = false;
console.log(numero1 === numero2); //false

const texto1 = "alura";
const texto2 = "a";
console.log(texto1 === texto2); //false

//

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input2 = null;
let input3;

console.log(input2); // null
console.log(input3); // undefined