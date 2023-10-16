/*
    Você foi convidado para desenvolver um script para realizar os sorteios para uma  casa de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
    Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math: Math.round(Math.random() * 10)
*/

function sortear() {
    const dezenas = [];
    while (dezenas.length < 6) {
        const numeroSorteado = Math.floor((Math.random() * 59) + 1);
        if (!dezenas.includes(numeroSorteado)) {
            dezenas.push(numeroSorteado);
        }
    } 
    return dezenas;
}

console.log(sortear());