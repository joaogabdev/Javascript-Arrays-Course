const numeros = [3, 5, 7, 2, 5, 8];
const numeroConfere = 7;

let conferirNumero = numeros.map(
    function (numero, indice) {
        if (numero === numeroConfere) {
            return `O número ${numero} está na posição ${indice + 1}`;
        } else {
            return `-1`;
        }
    }
)

console.log(conferirNumero);
