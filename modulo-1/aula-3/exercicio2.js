/*
    Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
    que contém nome, nota1 e nota2. Use o for para percorer esse array
    e calcular a média das duas notas de cada aluno.
    Ao final, imprimir o nome do aluno e a sua média
*/

const listaDeAlunos = [
    { nome: "João", notas: [8, 7] },
    { nome: "Maria", notas: [9, 8] },
    { nome: "Carlos", notas: [6, 5] },
    { nome: "Ana", notas: [7, 6] },
    { nome: "Pedro", notas: [10, 9] },
    { nome: "Lúcia", notas: [8, 7] },
    { nome: "Fernando", notas: [7, 6] },
    { nome: "Camila", notas: [9, 8] },
    { nome: "Rafael", notas: [6, 5] },
    { nome: "Juliana", notas: [10, 9] },
  ];

function calcularMedia(listaDeNotas) {
    let soma = 0;
    let media = 0;
    for (const nota of listaDeNotas) {
        soma += nota;
        media = soma / listaDeNotas.length;
    }
    return media;
}

function emitirBoletim (alunos) {
    for (const aluno of alunos) {
        console.log(`A média final do aluno ${aluno.nome} é ${calcularMedia(aluno.notas)}.`)
    }

}

emitirBoletim(listaDeAlunos);