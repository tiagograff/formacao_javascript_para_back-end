const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
];

const sala01 = alunos.slice(0,alunos.length/2);
const sala02 = alunos.slice(alunos.length/2); // se n preencher fica subentendido que e o ultimo

console.log(sala01);
console.log(sala02);