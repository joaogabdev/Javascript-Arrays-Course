const lista = ["Peppa", "George", "Sussy"];

function imprimirElemento(elemento) {
    for (let i = 0; i < elemento.length; i++) {
        console.log(`Índice ${i}, elemento ${elemento[i]}`);
    }
}

imprimirElemento(lista);