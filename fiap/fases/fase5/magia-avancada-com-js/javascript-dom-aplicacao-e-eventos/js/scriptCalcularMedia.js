// recuperando o botão
const btnCalcular = document.querySelector("#calcular");

if (btnCalcular) {
  // atribuindo a função ao botão recuperado
  btnCalcular.addEventListener("click", () => {
    // recuperando os elementos que têm a classe vingador
    const vingadores = document.querySelectorAll(".vingador");

    // usando um for para percorrer o array - usaremos o forEach()
    vingadores.forEach((vingador) => {
      // recuperando o valor da força e convertendo em um número
      const forca = Number(vingador.querySelector(".forca")?.textContent || 0);
      // recuperando o valor da agilidade e convertendo em um número
      const agilidade = Number(
        vingador.querySelector(".agilidade")?.textContent || 0,
      );
      // recuperando o valor da velocidade e convertendo em um número
      const velocidade = Number(
        vingador.querySelector(".velocidade")?.textContent || 0,
      );

      // calculando os xp de cada vingador
      const resultadoXP = (forca + agilidade + velocidade) / 3;

      // exibindo na página o xp correspondente
      const xpFinal = vingador.querySelector(".xp-final");
      if (xpFinal) {
        xpFinal.textContent = resultadoXP.toFixed(1);
      }

      // verificar se o XP é menor que 91 e colocar duas classes CSS para chamar a atenção ao herói
      if (resultadoXP <= 91) {
        vingador.classList.add("bg-danger", "text-light");
      }
    });
  });
}
