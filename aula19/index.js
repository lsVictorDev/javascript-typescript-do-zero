/*
const nome1 = "Luiz";
const sobrenome01 = "Miranda";
const idade01 = "25";
*/
// ao invés de criar uma variável para cada dado
// posso otimizar o código usando objetos, ex:
/*
const pessoa1 = {
    nome: 'Victor',
    sobrenome: 'Lemos',
    idade: '22',
};

console.log(`Meu nome é ${pessoa1.nome} ${pessoa1.sobrenome} e tenho ${pessoa1.idade} anos de idade.`);
*/

// Criando um objeto em uma função:
/*
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade,
    }
};

const pessoa1 = criaPessoa('Victor', 'Lemos', 22);
console.log(`Meu nome é ${pessoa1.nome} ${pessoa1.sobrenome} e tenho ${pessoa1.idade} anos de idade.`);
*/

// extra: usando objetos e função dentro de uma variável

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 23,

    //function
    fala() {
        console.log(`A minha idade atual é ${this.idade}.`)
    }
}

pessoa.fala(); // Mostra o console.log da funcion "fala".