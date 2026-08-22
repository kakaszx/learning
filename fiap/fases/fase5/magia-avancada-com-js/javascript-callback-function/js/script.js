// Função que calcula o desconto em um produto
function calcularDesconto(preco, porcentagemDesconto) {
  const desconto = preco * (porcentagemDesconto / 100);
  return preco - desconto;
}

// Função que recebe o preço e a porcentagem de desconto e a função de callbacl para executar
function calcularPrecoFinal(preco, porcentagemDesconto, callback) {
  const precoFinal = callback(preco, porcentagemDesconto);
  console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);
}

// Chamando a função passando os parâmetros e a função de callback
calcularPrecoFinal(100, 10, calcularDesconto);
calcularPrecoFinal(5679, 20, calcularDesconto);

console.log("-----------------------------");

// Outro exemplo
function exibirHoraAtual(callback) {
  setInterval(() => {
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();
    const horaAtual = `${hora}:${minutos}:${segundos}`;
    callback(horaAtual);
  }, 1000);
}

function exibirHora(horaAtual) {
  console.log(horaAtual);
}

exibirHoraAtual(exibirHora);
