// Um pouco mais sobre numbers em JavaScript

// anterior mente vimos como transformar uma string em number, e como podemos fazer ao contratio?
// segue o exemplo:

/*
let num1 = 1;
let num2 = 2.5;

// Não edita a variável num1, apenas retorna um valor temporariamente,
// fazendo o number parecer uma string.
console.log(num1.toString() + num2); mostra 12.5, concatenação da variável num1 + num2

console.log(num1 + num2); Mostra 3.5, Como dito, o .toString não muda o valor da variável.
*/

//como escolher a quantidade de casas decimais após o ponto
// ex:
let num1 = 10.794875845
console.log(num1); // Mostra 10.794875845
console.log(num1.toFixed(2)); // Mostra 10.79

// como saber se o valor de uma conta ou um valor recebido é de ponto flutuante ou inteiro
// ex:

console.log(Number.isInteger(num1)); // esta função retorna VERDADEIRO ou FALSO, ou retorna se o number é inteiro ou não.
// nesta situação como a variável num1 não é um numero inteiro, o console.log retorna "false"
// caso o número fosse inteiro retornaria "true".

// para saber se uma conta deu certo ou não, podemos usar a seguinte função
// ex:

let temp = num1 * 'Ola'; // Uma conta que não existe no javascript

console.log(temp); // Mostra NaN (javascript informando que não é um número)
console.log(Number.isNaN(temp)) // desta forma podemos saber se a conta é valida ou invalida
// se o concole.log retornar um "true" ela é invalida, se retornar um "false" a conta foi validada.

