// Exec com apenas 3 tentativas

// let senha = "";
// let tentativa = 0;

// do {
//   senha = prompt("Digite a sua senha");
//   tentativa++;
// } while (senha !== "senha123" && tentativa < 3);
// if (senha === "senha123") {
//   console.log("Acesso Permitido!");
// } else {
//   console.log("Conta bloqueada");
// }

let senha = "";

do {
  senha = prompt("Digite a sua senha:");
} while (senha !== "senha123");

alert("Acesso permitido!");

let produtoEmEstoque = 10;

do {
  console.log("Ainda temos esse produto em estoque");
  console.log(`Quantidade em estoque: ${produtoEmEstoque}`);
  produtoEmEstoque--;
  
  if (produtoEmEstoque === 4) {
    alert("Atenção!!! Estoque está baixo, temos apenas 04 produtos");
  }
} while (produtoEmEstoque >= 0);
console.log(`Atenção, produto indisponível - Estoque = 0`);
