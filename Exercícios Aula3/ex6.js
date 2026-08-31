const numeros = [8, 9, 7, 3, 6.7, 10];
let somaNotas = 0;

for (let numero of numeros) {
    somaNotas += numero;
}

let media = somaNotas / numeros.length;

console.log(`A média é ${media}`)