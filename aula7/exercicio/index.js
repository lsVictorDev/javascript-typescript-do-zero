/*
Exercicio: Mostrar as frases a baixo, sendo que os nomes e os números devem ser variáveis.

  Luiz Otávio Miranda tem 30 anos, pesa 84 kg.
  tem 1.8 de altura e seu IMC é de 25.925925925925924.
  Victor lemos nasceu em 1980.

*/

const nome = 'Victor Lemos'
const sobrenome = 'Silva'
const idade = 22;
const peso = 84;
const altura = 1.80;
// as variáveis a baixo são let por que iram sofrer alteração no valor.
let imc = peso / (altura*altura); // peso / (altura * altura)
let anoNascimento = 2026 - idade; // 2026 - idade

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso,'kg.');
console.log('tem', altura, 'e seu IMC é de', imc + '.');
console.log(nome, 'nasceu em', anoNascimento + '.');

// gabarito:

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso,'kg.');
console.log('tem', altura, 'e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento);

// gabarito + nova função

// deve ser usado entre `` e não aspas.
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}kg.`);
console.log(`tem ${altura} e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
