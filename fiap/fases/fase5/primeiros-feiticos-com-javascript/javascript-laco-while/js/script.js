// Pedir ao usuário a digitação do numero 7

// let numero = Number((prompt("Digite o numero 7")))

// while (numero !== 7) {
//   numero = Number(prompt("Erro... digite o número 7"));
// }

// console.log(`Número digitado: ${numero}`);

// --------------------------------------------------------------------

// Juros em 12 meses
let mes = 1;
let valor = 10000;
let juros = 0.05;
let total = 0;

while (mes <= 12) {
  total += valor * juros;
  mes++;
}
console.log(`Total investido: ${valor}`);
console.log(`Total de juros: ${total}`);
console.log(`Valor final ao término da aplicação ${total + valor}`);
