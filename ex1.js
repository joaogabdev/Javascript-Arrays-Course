const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const novaLista = coresLista1.concat(coresLista2);

const listaFinal = [new Set (novaLista)];

console.log(listaFinal);
