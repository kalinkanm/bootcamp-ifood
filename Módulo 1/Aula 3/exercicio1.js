/*
    Crie um algoritmo usando o for que leia uma lista.
    Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
    Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

    Lista -> [1,2,3,4,5,6,7,8,9]
    [2, 4, 6, 8] -> pares
    [1, 3, 5, 7, 9] -> impares
*/

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function separarParesImpares(numeros) {
    const pares = [];
    const impares = [];
    for (const numero of numeros) {
        if (numero % 2 === 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }
    }
    return {pares, impares}
}
console.log(separarParesImpares(lista));