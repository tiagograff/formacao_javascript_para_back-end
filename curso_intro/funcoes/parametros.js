function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(2,2));

function nomeIdade(nome, idade){
    return `meu nome é ${nome} minha idade é ${idade}`;
}

console.log(nomeIdade("tiago", "22"));

function multiplicacao(num1, num2){
    return num1 * num2;
}

console.log(multiplicacao(soma(4,5), soma(3,3)))