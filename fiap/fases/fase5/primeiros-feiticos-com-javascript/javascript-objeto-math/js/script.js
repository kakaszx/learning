let numero = 3150.512;
console.log(numero);

// Math.ceil() --> Retorna o próximo número inteiro.
console.log(`Math.ceil(${numero}) = ${Math.ceil(numero)}`);

// Math.floor() --> Retorna o número inteiro anterior.
console.log(`Math.floor(${numero}) = ${Math.floor(numero)}`);

// Math.round() --> Retorna o número inteiro mais próximo, para isso ele verifica: Parte decimal do número maior ou igual a 49, retornará o número inteiro anterior. Parte decimal do número maior ou igual a 50, retornará o próximo número inteiro.
console.log(`Math.round(${numero}) = ${Math.round(numero)}`);

// Math.max() --> Retorna o maior valor encontrado no intervalo.
console.log(Math.max(34, 67, 89, 21, 66, 98, 112, 1, 3, 124));

// Math.min() --> Retorna o menor valor encontrado no intervalo.
console.log(Math.min(34, 67, 89, 21, -66, 98, 112, 1, 3, 124));

// parseInt() --> Retorna a parte inteira
console.log(`parseInt(${numero}) = ${parseInt(numero)}`);

// Math.pow() --> Retorna a potência de um número.
console.log(Math.pow(2, 5));
console.log(2 ** 5);

// Math.random() --> Retorna um número aleatório entre 0 e 1.
let numeroSorteado = Math.random();
console.log(numeroSorteado);

// Math.sqrt() --> Retorna a raiz quadrada de um número.
console.log(Math.sqrt(25));

// Math.cbrt() --> Retorna a raiz cúbica de um número.
console.log(Math.cbrt(27));
