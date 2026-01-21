// Criando variável pela primeira vez no curso
let nome = 'Victor';

console.log(nome,'nasceu em 2004.');
console.log('Em 2010', nome,'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2015.');

// também posso criar variável sem valor, e durante o sódigo definir um valor a ela
//ex:

let sobrenome; // Declarei a variável
console.log(sobrenome); // Valor desta variável: undefined

sobrenome = "Lemos";

console.log('Meu nome é', nome, sobrenome);

// obs: Eu posso mudar o valor de uma variável mas não posso redeclarar uma variavel
// ex:

let idade; // declarei
idade = 21; // dei um valor
console.log(idade);
idade = 32; // mudei seu valor
console.log(idade) // até aqui OK

// let idade; ERRO
// let idade = 25; ERRO

// Não devo criar variáveis com palavras reservas do motor javascript
//ex: const,var,console...