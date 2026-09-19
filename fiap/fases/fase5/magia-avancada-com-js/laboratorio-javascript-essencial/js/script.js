// recuperando o tbody
const tbody = document.querySelector("tbody");

// pegar o formulário - cancelar o evento padrãp - chamar uma função
document.querySelector("form").addEventListener("submit", function (e) {
  // cancelar o evento padrão
  e.preventDefault();

  const campos = [
    document.querySelector("#usuario"),
    document.querySelector("#email"),
    document.querySelector("#dataCadastro"),
    document.querySelector("#tipoConta"),
  ];

  console.log(campos);

  // criar a tr
  const tr = document.createElement("tr");

  // percorrer o Array para pegar as informações e criar a td
  campos.forEach((campo) => {
    // criar uma td
    const td = document.createElement("td");

    // pegar o valor do campo e passar para o td
    td.textContent = campo.value;

    // atribuir a td a elemento tr
    tr.appendChild(td);
  });

  // colocar a tr dentro do tbody
  tbody.appendChild(tr);

  // limpar os campos do form
  this.reset;
});
