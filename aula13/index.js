// Mais sobre string:
// como puxar o elemento de um indice,
// ex
//               01234567
let umaString = 'Um texto';

console.log(umaString[4]); // aqui estou puxando o elemento 3 do indice a cima
//  01234567 - indice 4 é a letra "e", logo no console.log vai mostrar "e".
// quando saio do range, ex: console.log(umaString[9]); vai mostrar "undefined".
// 'Um texto'

// ou

// Já com o charAt, quando saio do range, ex: ex: console.log(umaString.chatAt(9)); não mostra nada, nem um erro, nem "undefined".
console.log(umaString.charAt(3));

// como buscar em qual indice a palavra começa
// ex:

console.log(umaString.indexOf('texto')); // Mostra 3
// pois lá na declaração da variável apalavra "texto" começa no terceiro caracter

// como saber o tamanho de uma string
// ex:

let umTexto = 'O rato roeu a ropupa do rei de Roma';

console.log(umTexto.length); // mostra 35