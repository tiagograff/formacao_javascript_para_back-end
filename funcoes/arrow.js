function apresentar(nome){
    return`meu nome é ${nome}`;
}

//                     param | arrow | return
const apresentarArrow = nome =>`meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;
console.log(soma(1,3));

const somaNumPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        console.log("digite um numero menor");
    }else{
        return console.log(num1 + num2);
    }
}

somaNumPequenos(1,9);

//rapido e curto (escopo) = expressao de funcao