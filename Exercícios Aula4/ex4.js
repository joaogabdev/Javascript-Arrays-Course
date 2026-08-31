const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

const alunoProcurado = todasAsTurmas.find(nome => nome === "Ana Soza");

if (alunoProcurado) {
    console.log("Aluno encontrado");
} else {
    console.log("Aluno não encontrado");
}