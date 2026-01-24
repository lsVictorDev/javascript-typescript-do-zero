// Usando VAR podemos mudar o valor da variável

var nome = 'Victor';
var nome = 'Lemos';
console.log(nome);

// Usando LET não posso redeclarar a mesma variável com outro valor
// ex:

/* ERRO
let idade = 21;
let idade = 23;
console.log(idade);
*/

// Porem, usando LET eu posso mudar o valor da variável
// ex:

let anoNascimento = 2004;
anoNascimento = 2005;
console.log(anoNascimento); // Mostra 2005

// Já com CONST, não podemos nem redeclarar com outro valor, nem mudar o valor dela.
//ex:

/*ERRO
const paises = 'Brasil';
const paises = 'Estados Unidos';
copnsole.log(paises);
*/

/*ERRO
const paises = 'Brasil';
paises = 'Estados Unidos';
copnsole.log(paises);
*/