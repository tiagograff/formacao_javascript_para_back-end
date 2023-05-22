const nomes = ["Evaldo", "Mari", "Camis"]

nomes.forEach(function(nomes){
    console.log(nomes)
})

nomes.forEach((nomes) =>{
    console.log(nomes)
})

//forma externa

function imprimeNome(nome){
    console.log(nome)
}

nomes.forEach(imprimeNome);