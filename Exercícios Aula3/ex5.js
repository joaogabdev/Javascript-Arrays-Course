const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

function mostraPares(lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            console.log(lista[i]);
        }
    }
}

mostraPares(numeros);