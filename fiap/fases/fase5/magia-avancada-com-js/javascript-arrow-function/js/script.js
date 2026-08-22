const calcularValorHospedagem = (diarias, valorDiaria, taxaLimpeza) => {
  return diarias * valorDiaria + taxaLimpeza;
};

let valorHospedagem = calcularValorHospedagem(9, 500, 300);
console.log(`O valor da reserva é R$ ${valorHospedagem.toFixed(2)}.`);

valorHospedagem = calcularValorHospedagem(5, 300, 150);
console.log(`O valor da reserva é R$ ${valorHospedagem.toFixed(2)}.`);

console.log("---------------------------------------");

// Validar um login
const validarLogin = (usuario, senha) => {
  const usuarioRegistrado = "joao123";
  const senhaRegistrada = "senha123";

  if (usuario === usuarioRegistrado && senha === senhaRegistrada) {
    console.log("Login realizado com sucesso!");
    return true;
  } else {
    console.log("Usuário ou senha inválidos. Tente novmaente");
    return false;
  }
};

// Exemplos de uso:
const user1 = validarLogin("joao123", "senha123");
const user2 = validarLogin("maria456", "senha456");
console.log(user1, user2);
