let jogosAlugados = 0;

function contadorJogosAlugados() {
  console.log(`Jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector(".dashboard__item__img");
  let botao = gameClicado.querySelector(".dashboard__item__button");

  if (imagem.classList.contains("dashboard__item__img--rented")) {
    if (confirm("Deseja devolver o jogo?")) {
      imagem.classList.remove("dashboard__item__img--rented");
      botao.classList.remove("dashboard__item__button--return");
      botao.textContent = "Alugar";
    }
  } else {
    imagem.classList.add("dashboard__item__img--rented");
    botao.classList.add("dashboard__item__button--return");
    botao.textContent = "Devolver";
  }
  contadorJogosAlugados();
}
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contadorJogosAlugados();
});