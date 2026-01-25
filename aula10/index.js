// Operadores aritméticos
// - * /
// + adição/concatenação

const num1 = '5';
const num2 = 10;

console.log(num1 + num2); // Mostra 510
// nesta situação é feita a concatenação, pois, o tipo das variáveis são diferentes, sendo uma string e um number.

const num3 = 10;

console.log(num2+num3); // Mostra 20

// obs: os operadores de multiplicação e divisão tem prioridade
// sobre os de adição e subtração
// ex:

const num4 = 27;

console.log(num2 + num3 / num4) // Mostra 10.37
console.log(num2 + num3 * num4) // Mostra 280
// primeiro vai ser feita a multiplicação, depois a adição, como na matemática real.

// caso seja necessário que a adição ou a subtração seja executada antes
// basta usas () 
// ex:

console.log((num2 + num3) * num4); // Mostra 540
// Neste caso, o que esta dentro de parenteses é executado primeiro.

// Operadoras de incremento
// usando (nome da variável)++ o valor da variável sobe 1
// ex:

let num5 = 30;
console.log(num5); // Mostra 30
num5++;
console.log(num5); // Mostra 31
num5++;
num5++;
num5++;
num5++;
console.log(num5) // Mostra 35, pois eu encrementei 5 vezes um valor na variável.
// caso execute um console.log encrementando o ++ dentro do console.log,
// mostra o mesmo valor e depois ele passa a ter 1 a mais.
// ex:

let num6 = 1;
console.log(num6++); // Mostra 1
// Foi incrementado um valor, mas como a variável foi executada primeiro e o incremento
//  foi feito após, eu devo dar o segundo console.log para ver o valor '2';
console.log(num6) // Mostra 2

// Funciona da mesma forma para o operador de decremento

let num7 = 1;
console.log(--num7); // Mostra 0, pois decremento foi executado antes, já que o motor do javascript lê da esquerda para a direita, de cima para baixo, como nós.

console.log(num7++); // Mostra 0
console.log(num7); // Mostra 1

// Operadores de atribuição

let contador = 2;
contador *= 2; // contador = contador + 2
console.log(contador); // Mostra 4

// ou

let passo = 2;
passo **=10; // passo = passo elevado a 10
console.log(passo) // Mostra 1024

// Casos de erro

const num10 = 10;
const num11 = 'Victor';
console.log(num10 * num11); // neste caso como uma string não é multiplicavel com um número, ele mostra "NaN" = Not a Number.

const num12 = 10;
const num13 = '5';
console.log(num12 * num13); // Ainda que a variável num13 seja uma string, o motor do javascript faz de tudo para resolver a conta.
// este console.log mostra "50", ele resolveu a conta que eu pedi, num12 * num 13, mas isto NÃO SE FAZ E É ERRADO.
console.log(typeof num13); // String

// eu posso converter esta situação usando pardeINT
// ex:

const num14 = 10;
const num15 = parseInt('5'); // Estou transformando a string em Number, ai sim eu posso executar a multiplicação
console.log(typeof num15); // Number
console.log(num14 * num15); // Mostra 50

// caso o valor da variável simulando um número de ponto flutuante eu posso usar parseFloat.
// ex: 

const num16 = parseFloat('15.23'); // Transformando a string em um número de ponto flutuante.
console.log(typeof num16); // Number
console.log(num14 * num15); // Mostra 50

// também posso usar desta forma
// ex:

const num17 = 10; //
const num18 = Number('12.44'); // converte a string para number, idependente se é número de ponto flutuante ou não. Só não pode ser letra, se não mostra NaN.
console.log(typeof num18) // Number
console.log(num17 * num18); // Mostra 124.39