let numero1 = 50;
let numero2 = 80;
let resultado;

console.log(`Primeiro Número: ${numero1}`);
console.log(`Segundo Número: ${numero2}`);

// Operador E --> && = Tudo precisa ser TRUE para a resposta ser TRUE
resultado = numero1 < numero2 && numero1 !== numero2;
console.log(resultado);

// Operador OU --> || = Basta 1 ser TRUE para a resposta ser TRUE
resultado = numero1 > numero2 || numero1 !== numero2;
console.log(resultado);

// Operador NÃO --> ! = Negação da Resposta
resultado = !((numero1 > numero2) || (numero1 !== numero2));
console.log(resultado);
