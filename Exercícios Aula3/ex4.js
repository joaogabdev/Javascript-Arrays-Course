const lista = [7, 5, 6 , 2, 12, 4];

function mostraMaiorEMenor(elemento) {
    let maior = 0;
    let menor = 0;

    for (let i = 0; i < elemento.length; i++) {
        if (elemento[i] > maior) {
            maior = elemento[i];
        }
        if (elemento[i] < menor) {
            menor = elemento[i];
        }
    }
    return `O maior número é ${maior} e o menor é ${menor}`;
}

console.log(mostraMaiorEMenor(lista));