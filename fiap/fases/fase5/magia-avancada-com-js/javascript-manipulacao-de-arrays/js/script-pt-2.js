const produtos = [
  "Notebook",
  "Smartphone",
  "Smartwatch",
  "Tablet",
  "PlayStation 5",
];

console.table(produtos);

const produtos2 = ["Iphone 14", "Xbox", "Atari"];
console.table(produtos2);

// Concat junta arrays
const novosProdutos = produtos.concat(produtos2);
console.table(novosProdutos);

// Ordenar os produtos em ordem alfabética usando o método sort()
novosProdutos.sort();
console.table(novosProdutos);

// Ordenar inversa reverse()
novosProdutos.reverse();
console.table(novosProdutos);

// Criar uma string com todos os elementos do array separdos por vírgula usando o metodo join()
let produtosString = produtos.join(", ");
console.log("A String criada é: " + produtosString);
console.log(
  "------------------------------------------------------------------------",
);

// Verifciar se o produto "Smartwatch" existe no Array usando o metodo includes()
let existe = produtos.includes("Smartwatch");
console.log("O produto existe no array? " + existe);

console.log(produtos);
console.log(
  "------------------------------------------------------------------------",
);

// Verificar se todos os produtos contem a letra "a" usando o método every()
let todosComLetraA = produtos.every((produto) => {
  return produto.includes("a");
});

console.log("Todos os protudos tem a letra A? " + todosComLetraA);
console.log(
  "------------------------------------------------------------------------",
);

// Verificar se pelo menos um elemento tem 10 caracteres
let total = 0;
const tamanhoMaximo10 = produtos.some((produto) => {
  return produto.length <= 10;
});
console.log(`Algum produto atende ao teste: ${tamanhoMaximo10}`);
console.log(
  "------------------------------------------------------------------------",
);

// find() - retorna o primeiro elemento que tenha mais de 6 caracteres
const tamanhoMaior6 = produtos.find((produto) => {
  return produto.length > 10;
});
console.log(tamanhoMaior6);
console.log(produtos);
