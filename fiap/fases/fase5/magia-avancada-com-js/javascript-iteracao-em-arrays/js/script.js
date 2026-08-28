const produtos = [
  "Smartphone",
  "Notebook",
  "Smarwatch",
  "Tablet",
  "Teclado",
  "Mouse",
  "Caixa de som",
  "Fone de ouvido",
  "Webcam",
  "Roteador",
];

console.table(produtos);
console.log("----------------------------------------");

// Usando um for
for (let i = 0; i < produtos.length; i++) {
  console.log(`Índice ${i} do Array = ${produtos[i]}`);
}
console.log("----------------------------------------");

// Usando for in
for (let index in produtos) {
  console.log(`Índice: ${index} - Produto: ${produtos[index]}`);
}
console.log("----------------------------------------");

// Usando for of
for (let produto of produtos) {
  console.log(`Nome do produto: ${produto.toUpperCase()}`);
}
console.log("----------------------------------------");

// Usando o forEach()
let produtoMaiorQuantidade = 0;
let maiorQuantidade = 0;
produtos.forEach((produto) => {
  console.log(`${produto} - ${produto.length}`);
  if (produto.length > maiorQuantidade) {
    maiorQuantidade = produto.length;
    produtoMaiorQuantidade = produto;
  }
});
console.log(
  `Maior quantidade de caractres: ${produtoMaiorQuantidade} - Total: ${maiorQuantidade} caracteres`,
);
console.log("----------------------------------------");
