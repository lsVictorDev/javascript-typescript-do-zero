// Exercicio:
// Pedir dois números ao usuario, e mostrar o resultado da soma dos números usando print.

const num1 = Number(prompt('Digite um número'));
const num2 = Number(prompt('Digite outro número'));

let resultado = num1 + num2;

alert('O resultado é ' + resultado);
// ou
alert('O resultado é ' + (num1 + num2));
// ou
alert(`O resultado é ${resultado}`);
