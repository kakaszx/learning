// Criando uma contagem com For
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

console.log("--------------------------");

for (let i = 0; i <= 9; i += 2) {
  console.log(i);
}

console.log("--------------------------");
for (let i = 0; i <= 19; i++) {
  console.log(`Número Sorteado: ${Math.floor(Math.random() * 999)}`);
}

console.log("--------------------------");

// Tabuada de um número
const numero = Math.ceil(Math.random() * 9);
for (let i = 0; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

console.log("--------------------------");

// Todos os números - For Aninhado
for (let i = 0; i <= 10; i++) {
  console.log(`Tabuada do ${i}`);

  for (let j = 0; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("--------------------------");
}
