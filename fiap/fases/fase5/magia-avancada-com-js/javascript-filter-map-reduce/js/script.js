const produtos = [
  "Notebook",
  "Smartphone",
  "Smartwatch",
  "Tablet",
  "PlayStation 5",
];
const precos = [6800, 6700, 3500, 6300, 5400];

console.log(produtos);
console.log(precos);
console.log(
  "-------------------------------------------------------------------",
);

// filter() Buscando produtos que tenha Smart
const produtosComSmart = produtos.filter((produto) => {
  return produto.includes("Smart");
});
console.log(produtosComSmart);
console.log(
  "-------------------------------------------------------------------",
);

// filter() Buscando preços maiores que 5500
const precosMaiores = precos.filter((preco) => {
  return preco > 5500;
});
console.log(precosMaiores);
console.log(
  "-------------------------------------------------------------------",
);

// map() - Aplica uma função a cada elemento de um array, e retorna um novo array
const produtosEmMaiuscula = produtos.map((produto) => {
  return produto.toUpperCase();
});
console.log(produtosEmMaiuscula);
console.log(
  "-------------------------------------------------------------------",
);

// map() - dar um desconto de 10%
const precosDesconto = precos.map((preco) => {
  return preco - preco * 0.1;
});
console.log(precosDesconto);
console.log(
  "-------------------------------------------------------------------",
);

// reduce retorna um único valor
const totalLetrasProdutos = produtos.reduce((acumulador, produto) => {
  return acumulador + produto.length;
}, 0);
console.log(totalLetrasProdutos);
console.log(
  "-------------------------------------------------------------------",
);

// Valor do estoque
const totalValores = precos.reduce((acumulador, preco) => {
  return acumulador + preco;
}, 0);
console.log(totalValores);
console.log(
  "-------------------------------------------------------------------",
);
