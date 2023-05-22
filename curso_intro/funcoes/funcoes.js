// let x = ""
// console.log(x)
// x = "oi"

//tres formas de escrever uma funcao

//declaracao de funcoes

function imprimeTexto(texto){
    console.log(texto)
}

imprimeTexto("ola, mundo!")
imprimeTexto("reaproveita o código!")

//

function soma(){
    return 2+2
}

// console.log(soma())

imprimeTexto(soma());

Math.round(3.85) // return -> 4
Math.floor(5.2)  // return -> 5
Math.trunc(4.8)  // return -> 4
Math.pow(4 , 2)  // return -> 4^2 = 16
Math.sqrt(64)    // return -> 8
Math.random()    // return -> 0.15449802102729304
Math.min(0, 150, 30, 20, -8, -200) // return -> -200
Math.max(0, 150, 30, 20, -8, -200) // return -> 150