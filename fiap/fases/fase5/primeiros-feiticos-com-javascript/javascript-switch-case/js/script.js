const regiao = "Sul";
let valorFrete = 0;

switch (regiao) {
  case "Sudeste":
    valorFrete = 35.0;
    break;
  case "Norte":
    valorFrete = 40.0;
    break;
  case "Sul":
    valorFrete = 45.0;
    break;

  default:
    valorFrete = 50.0;
}

console.log(`Região: ${regiao}`);
console.log(`Valor do frete da região: ${valorFrete}`);
