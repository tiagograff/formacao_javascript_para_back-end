const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado!`);

        // const medias = listaDeAlunosEMedias[1]
        // const alunos = listaDeAlunosEMedias[0]

        const [alunos,medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];
        console.log(`O ${aluno} tem a media ${mediaDoAluno}`);
    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana");