// Método construtor
const produtos = [
  "Televisão",
  "Video Game",
  "Celular",
  "Notebook",
  "Playstation 5",
];
console.log("-----------------------");

console.log(produtos);
console.table(produtos);
console.log("-----------------------");

// Adicionar um novo produto no INÍCIO do array usando o método unshift()
produtos.unshift("Monitor 144hz");
console.log(produtos);
console.log("-----------------------");

// Adicionar um novo produto no FINAL do array usando o método push()
produtos.push("Nintendo Switch Lite");
console.log(produtos);
console.log("-----------------------");

// Remover o primeiro produto do array usando o método shift()
let primeiroProduto = produtos.shift();
console.log("O primeiro produto removido foi: " + primeiroProduto);
console.log(produtos);
console.log("-----------------------");

// Remover o último produto do array usando o método pop()
let ultimoProduto = produtos.pop();
console.log("O último produto removido foi: " + ultimoProduto);
console.log(produtos);
console.log("-----------------------");

// Adicionar um novo produto no meio do array usando o método splice()
produtos.splice(2, 0, "Nintendo Switch OLED", "Iphone 17");
console.log("O array agora é: " + produtos);
console.table(produtos);
console.log("-----------------------");

// Remover três produtos do array usando o método splice()
produtos.splice(1, 3);
console.log("O array agora é: " + produtos);
console.log("-----------------------");

// Criar uma cópia do array original usando o método splice()
let copiaProdutos = produtos.slice();
console.log("A cópia do array é: " + copiaProdutos);
console.table(copiaProdutos);
console.log("-----------------------");

// Encontrar a posição do produto "Notebook" no array usando o método indexOf()
produtos.push("Notebook Thinkpad T14");
console.table(produtos);

let posição = produtos.indexOf("Notebook");
console.log("A posição do produto é: " + posição);
console.log("-----------------------");

posicao = produtos.lastIndexOf("Notebook");
console.log("A posição do produto é: " + posição);
console.log("-----------------------");
