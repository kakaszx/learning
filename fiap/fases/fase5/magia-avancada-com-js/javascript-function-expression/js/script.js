const simularValorPassagem = function (qtdAdultos, qtdCriancas, IdaVolta) {
  const PRECO_PASSAGEM = 1000;

  // Calculando adulto
  const valorAdulto = PRECO_PASSAGEM * qtdAdultos;

  // Calculando criança
  const valorCrianca = PRECO_PASSAGEM * qtdCriancas * 0.5;

  if (IdaVolta) {
    return (valorAdulto + valorCrianca) * 2;
  } else {
    return valorAdulto + valorCrianca;
  }
};

let valorPassagem = simularValorPassagem(2, 3, false);
console.log(
  `O valor total das passagens será de R$ ${valorPassagem.toFixed(2)}`,
);

valorPassagem = simularValorPassagem(3, 0, true);
console.log(
  `O valor total das passagens será de R$ ${valorPassagem.toFixed(2)}`,
);
