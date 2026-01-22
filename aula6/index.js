// Dicas e regras de variável

// Não podemos criar constantes com palavras reservadas: var, let, const, int.
// Constantes precisam ter nomes significativos.
// Não pode começar o nome de uma constante com um número.
// Não podem conter espaços ou traços.
// utilizamos camelCase.
// Case-sensitive.
// Não pode modificar o valor de uma constante.
// Não utilize VAR, utilize CONST.

const nome = 'Victor';
console.log(nome);

// obs: Não podemos apenas declarar uma constante sem dar um valor
// e também não podemos mudar o valor depois de declarar.
// ex:

// const nome; ERRO
const sobrenome = ('Lemos');
// sobrenome = ('Silva'); ERRO

// Podemos atribuir o valor de uma const a outra const, ou de uma var a outra var...
// ex:

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado); // 50

let resultadoTriplicado = resultado *3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado)

// nesta situação eu perdi o valor inicial do "rasultadotriplicado"
// ao contrario do que fizemos com a "const primeiroNumero",
// que se eu puxar ela, ainda vai ter seu valor inicial (5).
// ex:

console.log(primeiroNumero);

// se eu preciso saber o tipo de uma variável eu posso usar a função Typeof
//ex: 

console.log(typeof primeiroNumero); // A variável primeiroNumero é um number, logo vai ser 
// mostrado "number", sendo assim sussetivamente para "string"...

// outro ex:

const terceiroNumero = '21';
const quartoNumero = 2004;

console.log(terceiroNumero + quartoNumero); // resultado: 212004, sendo 21 string e 2004 number, 
// o resultado foi concatenado, mas o tipo da função "terceiroNumero" é string.

// com a função typeof ela vai me dizer que tipo essas funções são.
console.log(typeof (terceiroNumero + quartoNumero)); 
// obs: como um é string e o outro number, a string sobrepoe o number, logo vai ser mostrado "string".
