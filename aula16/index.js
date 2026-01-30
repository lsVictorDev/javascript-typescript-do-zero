// Objeto Math

let num1 = 9.54578;
// o objeto Math tem algumas funções sobre os numeros
// ex: arredondar para o primeironúmero inteiro para baixo

// let num2 = Math.floor(num1);
// console.log(num2); // Mostra 9

// também podemos arredondar para cima
// ex:
let num2 = Math.ceil(num1) // Mostra 10
console.log(num2);
// arredona para o primeiro número inteiro para cima

// caso eu queira sempre fazer um arredondamento para cima ou para baixo
// posso usar função Math.round(), desta forma se o número estiver quebrado
// a cima de 50, ele arredonda para cima, e se estiver quebrado de 49 para baixo ele arredonda para baixo
// ex:

console.log(Math.round(num1)); // Mostra 10
// como num1 tem o valor quebrado a cima de 50, ele arredonda para cima
// caso num1 tivesse o valor de 9.49, iria arredondar para 9
// ex:

let num3 = 9.49;
console.log(Math.round(num3)); // mostra 9

// tembém temos a função de pegar o maior número ou menor número de uma função
// ex:

// caso eu queira pegar o maior número de uma função, uso:

console.log(Math.max(1,2,3,4,200,1300,2000,32,22,88,90))
// usando Math.max(), a função escolhe o maior número que esta ali dentro
// logo o console.log vai mostrar "2000".

// também posso fazer isto para escolher o menor número
// ex:

console.log(Math.min(1,2,3,4,200,1300,2000,32,22,88,90)) // Mostra 1
// já que 1 é o menor número da sequência a cima.

// Caso eu queira gerar um número aleatório, posso usar a função Math.random();
// ex:

console.log(Math.random()); // Gera um número aleatorio entre 0 e 1
// porém ele nunca chega a o valor 1.00, sendo assim sempre vai gerar um número aleatório como 0.301027464453015.
// caso eu queira que gere um número inteiro entre 1 e 10
// ex:

const aleatorio = Math.round(Math.random()*(10 - 5)+5)
console.log(aleatorio); // gera um número arredondado aleatorio entre 10 e 5

// como descobrir a raiz quadrade de algum número?
// segue o exemplo:

let num4 = 12;
console.log(num4 ** (1/2)); // mostra a raiz quadrada de 9
