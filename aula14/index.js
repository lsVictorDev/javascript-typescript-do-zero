// Um pouco mais sobre Strings

let umaString = 'O rato roeu a roupa do rei de roma.';

// caso queira pegar apenas uma palavra, ex: rato.
// primeiro número onde inicia "2", segundo número onte termina o indice "6".
console.log(umaString.slice(2,6)); // pega do indice 2 até o indice 6

// para pegar os ultimos indices:
console.log(umaString.slice(-3)); // mostra "ma."
// você coloca o número de quantos indices quer de trás para frente.
console.log(umaString.slice(32)); // funciona igual o % no javascript, o % é o que resta para chegar a divisão, aqui se a string tiver 34 indices e eu pedir 32, vai mostrar no console.log as letras que faltam para chegar a 34.

// para dividir a string em todos os espaços
// ex:
//espaço dentro da split, pois eu quero separar a string onte tem espaço:
console.log(umaString.split(' '));
// tambéms serve para quando quero tirar alguma letra da string
// ex:
// para tirar o r da string:

console.log(umaString.split('r'));

// caso eu queira que divisão de strings aconteca entre esáços de duas palavras:
// ex:
console.log(umaString.split(' ', 2)); // vai mostrar as duas primeiras palavras da string
