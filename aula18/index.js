// Introdução a funções em JavaScript

/*
// Declarando uma função

//              parâmetro
//                 ↓
function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}

// Chamando a função

// valor passado ao parâmetro "nome"
//          ↓
saudacao('Victor');

// A função pode ser reutilizada com valores diferentes
saudacao('Maria');
saudacao('João');
// Até aqui foram exibidas três frases:
// "Bom dia Victor!", "Bom dia Maria!" e "Bom dia João!"
*/

// Caso eu tente dar um console.log diretamente na função,
// o retorno será undefined, pois ela não retorna nenhum valor.
// Podemos resolver isso utilizando return.

/*
function bomDia(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = bomDia('Victor');
console.log(variavel); // Mostra "Bom dia Victor!"
*/

// Utilizando valores padrão nos parâmetros para evitar NaN
// quando nenhum valor for passado à função

function calculo(x = 0, y = 0) {
    const resultado = x + y;
    return resultado; // O return encerra a função e devolve um valor
}

const resultado = calculo(); // Retorna 0 e não NaN
console.log(resultado);

// Ao definir valores padrão (0) para x e y,
// evitamos erros caso a função seja chamada sem argumentos.

// ArrowFunction
// quando a função tem apenas uma linha, podemos usar ArrowFunction, ex:

const raiz = n => n**0.5;

console.log(raiz(9)); // Mostra 3
