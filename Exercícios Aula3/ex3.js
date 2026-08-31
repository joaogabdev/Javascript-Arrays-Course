const lista = [2, 3, 5, 6];
valorSoma = 0;

function somaNum(soma) {
    for (let i = 0; i < soma.length; i++) {
        valorSoma += soma[i];
    }
    console.log(`A soma é ${valorSoma}`)
}

somaNum(lista);