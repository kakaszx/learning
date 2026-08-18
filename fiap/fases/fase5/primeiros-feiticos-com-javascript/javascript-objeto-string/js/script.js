// Criando a String
let frase = "Javascript é uma linguagem de programação maravilhosa";
let fraseMod =
  "        Javascript é uma linguagem de programação maravilhosa      ";
console.log(frase);

// Retorna o tamanho da String
console.log(frase.length);

// Percorrendo a String
console.log(frase[0]);
console.log(frase[52]);
console.log(frase[53]);

// Letras maiúsculas
console.log(frase.toUpperCase());

// Letras minúsculas
console.log(frase.toLowerCase());

// Percorrendo com metodo
console.log(frase.charAt(40));

// Buscar algo na String - pelo início
console.log(frase.indexOf("a"));

// Buscar algo na String - pelo fim
console.log(frase.lastIndexOf("a"));

// Buscar algo na String (QUE NÃO TEM) - pelo início
console.log(frase.indexOf("Z"));

// Buscar algo na String (QUE NÃO TEM) - pelo fim
console.log(frase.lastIndexOf("Z"));

// Verificar se existe
console.log(frase.includes("ling"));

// Juntando frases
console.log(frase.concat(" e dahora"));

// Substituindo caracteres
console.log(frase.replace("a", "@"));
console.log(frase.replaceAll("a", "$"));

// Parte da String
console.log(frase.substring(4, 41));
console.log(frase.slice(4, 41));

// Separa a String - Array
console.log(frase.split(" "));

// Retirando espaços
console.log(fraseMod);
console.log(fraseMod.trim());

// Verificando se a String começa com uma cadeia de caracteres
console.log(frase.startsWith("Java"));

// Verificando se a String termina com uma cadeia de caracteres
console.log(frase.endsWith("osa"));
