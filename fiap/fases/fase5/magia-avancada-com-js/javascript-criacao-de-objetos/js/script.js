// Objetos literais
const produto1 = {
  id: 123,
  tipo: "Celular",
  fabricante: "Apple",
  preco: 4899.0,
};

const produto2 = {
  id: 456,
  tipo: "Notebook",
  fabricante: "Lenovo",
  preco: 6899.0,
};

console.log(produto1);
console.log(produto2);
console.log(produto1.tipo);
console.log(produto2.preco);
console.log("--------------------------");

// Criando objetos com construtor
function User(id, user, password, email) {
  this.id = id;
  this.user = user;
  this.password = password;
  this.email = email;
}

const user1 = new User(123, "Eu mesmo", "abc", "eumesmo@eu.com");
const user2 = new User(456, "Você mesmo", "def", "vocemesmo@voce.com");
const user3 = new User(789, "ele mesmo", "ghi", "elemesmo@ele.com");

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user3.id);
console.log(user2.email);
console.log("--------------------------");

// factory function
function criarHeroi(nome, velocidade, agilidade, forca) {
  return {
    nome,
    velocidade,
    agilidade,
    forca,
  };
}

const heroi1 = criarHeroi("Eu", 88, 87, 91);
const heroi2 = criarHeroi("Tu", 86, 82, 92);
const heroi3 = criarHeroi("Ele", 92, 98, 94);

console.log(heroi1);
console.log(heroi2);
console.log(heroi3);
console.log(heroi3.forca);
console.log("--------------------------");

// Criando métodos
function Pessoa(nome, idade, altura, cidade, ocupacao) {
  return {
    nome,
    idade,
    altura,
    cidade,
    ocupacao,
    exibirPessoa: function () {
      console.log(`Nome: ${nome}`);
      console.log(`Idade: ${idade}`);
      console.log(`Altura: ${altura}`);
      console.log(`Cidade: ${cidade}`);
      console.log(`Ocupação: ${ocupacao}`);
    },
  };
}
const pessoa1 = new Pessoa("Paulo", 50, 1.93, "São Paulo", "Desenvolvedor");
pessoa1.exibirPessoa();
console.log("--------------------------");

const pessoa2 = new Pessoa("Jonas", 30, 1.7, "Fortaleza", "Mecânico");
pessoa2.exibirPessoa();
console.log("--------------------------");

// Adicionando uma propriedade ao pessoal
console.log(`Adicionando a propriedade projeto Atual`);
console.log("--------------------------");

pessoa1.projetoAtual = "Projeto Front-End Disney";
console.log(pessoa1);

console.log("--------------------------");

// Removendo uma propriedade da pessoa2
console.log(`Removendo a altura da pessoa 2`);
console.log("--------------------------");

delete pessoa2.altura;

console.log(pessoa2);
console.log("--------------------------");
