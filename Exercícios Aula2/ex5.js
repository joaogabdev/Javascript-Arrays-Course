let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
        linha.push(valorInicial++);
    }
    matriz.push(linha);
}

matriz[2][1] = 15

console.log(matriz[1][2])

console.log(matriz)