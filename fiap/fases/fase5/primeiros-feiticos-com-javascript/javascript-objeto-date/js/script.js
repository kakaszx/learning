let dataAtual = new Date();
console.log(dataAtual);

// Data do Mês
let dataMes = dataAtual.getDate();
if (dataMes < 10) {
  dataMes = "0" + dataMes;
}

console.log(`O dia de hoje é ${dataMes}`);

// Dia da Semana
let dataDia = dataAtual.getDay();
console.log(dataDia);

let diaSemanaExtenso;
// Colocando o dia da semana por extenso
switch (dataDia) {
  case 0:
    console.log(`Hoje é Domingo`);
    diaSemanaExtenso = "Domingo";
    break;

  case 1:
    console.log(`Hoje é Segunda-Feira`);
    diaSemanaExtenso = "Segunda-Feira";

    break;
  case 2:
    console.log(`Hoje é Terça-Feira`);
    diaSemanaExtenso = "Terça-Feira";

    break;
  case 3:
    console.log(`Hoje é Quarta-Feira`);
    diaSemanaExtenso = "Quarta-Feira";

    break;
  case 4:
    console.log(`Hoje é Quinta-Feira`);
    diaSemanaExtenso = "Quinta-Feira";

    break;
  case 5:
    console.log(`Hoje é Sexta-Feira`);
    diaSemanaExtenso = "Sexta-Feira";

    break;
  default:
    console.log(`Hoje é Sabado`);
    diaSemanaExtenso = "Sabado";
}

// Pegando o Mês
let mesAtual = dataAtual.getMonth() + 1;
console.log(mesAtual);

let mesAtualZero = mesAtual < 10 ? "0" + mesAtual : mesAtual;
console.log(`O mês é ${mesAtualZero}`);

// Pegando o Ano
anoAtual = dataAtual.getFullYear();
console.log(anoAtual);

// Pegando a Hora
let horaAtual = dataAtual.getHours();

horaAtual = horaAtual < 10 ? "0" + horaAtual : horaAtual;

console.log(horaAtual);

// Pegando os Minutos;
let minutoAtual = dataAtual.getMinutes();
minutoAtual = minutoAtual < 10 ? "0" + minutoAtual : minutoAtual;

console.log(minutoAtual);

// Pegando os Segundos
let segundoAtual = dataAtual.getSeconds();
segundoAtual = segundoAtual < 10 ? "0" + segundoAtual : segundoAtual;

console.log(segundoAtual);

// Montando a Data
console.log(
  `${diaSemanaExtenso}, ${dataMes}/${mesAtualZero}/${anoAtual}, ${horaAtual}:${minutoAtual}:${segundoAtual}`,
);
