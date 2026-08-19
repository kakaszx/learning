const precoProduto = 140.0;
const frete = 30.0;
let valorFinal = 0;

if (precoProduto <= 150) {
  valorFinal = precoProduto + frete;
} else {
  valorFinal = precoProduto;
}

console.log(`Valor a pagar R$${valorFinal}`);

let metodoPagamento = "Pix";

if (metodoPagamento === "Cartão de Crédito") {
  console.log(`Você pode parcelar em ate 12 vezes`);
} else if (metodoPagamento === "Boleto") {
  console.log(`Você tem um desconto de 5% no valor da compra`);
} else if (metodoPagamento === "Pix") {
  console.log(`Você tem um desconto de 10% no valor da compra`);
} else {
  console.log(`Você pagou com dinheiro, teve um desconto de 11%`);
}

let estoque = 5;
let statusEstoque = estoque > 0 ? "Produto disponível" : "Produto indisponível";

console.log(`Total estoque = ${estoque}`);
console.log(`Status produto = ${statusEstoque}`);
