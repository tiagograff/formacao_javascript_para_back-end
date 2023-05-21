// var - usa antes de declarar problemas: ter duas variaveis iguais

var altura = 5;
var comprimento = 7;

var area = altura * comprimento;
console.log(area);

//let 

let forma = 'retangulo'
let altura2 = 5;
let comprimento2 = 7;
let area2;

if (forma === 'retangulo'){
    area2 = altura2 * comprimento2;
} else {
    area2 = (altura2 * comprimento2) / 2;
}
console.log(area2);

//const

const forma2 = 'quadrado';
const altura3 = 5;
const comprimento3 = 7;
let area3;

if (forma2 == 'triangulo') {
    area3 = altura3 * comprimento3;
} else {
    area3 = (altura3 * comprimento3) / 2;
}

console.log(area3);