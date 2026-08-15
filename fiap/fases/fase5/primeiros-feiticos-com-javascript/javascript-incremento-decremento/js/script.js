let primeiroNumero = 30;
let segundoNumero = 20;

console.log(primeiroNumero, segundoNumero);

// Incrimento --> ++ - Adicinar 1 ao valor da variável
primeiroNumero++;

//Decremento --> -- - Subtrair 1 ao valor da variável
segundoNumero--;

console.log(primeiroNumero, segundoNumero);

console.log(`---------------------------`);

console.log(`Pós-fixada`);
primeiroNumero = 30;
segundoNumero = 20;
console.log(primeiroNumero, segundoNumero);

//Pós Fixada
let resultado = primeiroNumero++ + segundoNumero++;
console.log(resultado);
console.log(primeiroNumero, segundoNumero);

console.log(`---------------------------`);

console.log(`Pré-fixada`);
primeiroNumero = 30;
segundoNumero = 20;
console.log(primeiroNumero, segundoNumero);
resultado = ++primeiroNumero + ++segundoNumero;
console.log(resultado);
console.log(primeiroNumero, segundoNumero);
