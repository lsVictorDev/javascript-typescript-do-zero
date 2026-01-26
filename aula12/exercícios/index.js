// Exercicio:
// Criar 3 variáveis: A, B e C.
// Dar um concole.log e a variável B ter o valor de C, a variável C ter o valor de A e a variávvel A ter o valor de B.


/* Regras: Não posso usar esta formula.
// 
// varA = 'B';
// varB = 'C';
// varC = 'A';
//
*/

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const guardaVarA = varA;

varA = varB;
varB = varC;
varC = guardaVarA;

console.log(varA, varB, varC);

/* Gabarito:

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;
console.log(varA, varB, varC);

OU

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

*/