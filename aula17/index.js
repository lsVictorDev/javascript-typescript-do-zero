// Array = lista / coleção de valores

// const alunos = 'Luiza Maria João';
// Dessa forma não é possível acessar ou alterar apenas um nome,
// pois os valores não estão separados.

// Para criar um array, fazemos da seguinte forma:
const alunos = ['Luiz', 'Maria', 'João'];
// Normalmente utiliza-se apenas um tipo de dado dentro do array
// (neste caso, strings), embora o JavaScript permita misturar tipos.

/*
console.log(alunos); // Mostra ['Luiz', 'Maria', 'João']

// Os arrays também são indexados
//            0        1        2
console.log(alunos[0]); // Luiz
console.log(alunos[1]); // Maria
console.log(alunos[2]); // João
*/

// É possível editar um valor pelo índice
alunos[0] = 'Victor';
console.log(alunos); // ['Victor', 'Maria', 'João']

// Adicionando um novo valor manualmente
alunos[3] = 'Julia';
console.log(alunos); // ['Victor', 'Maria', 'João', 'Julia']

// Se não souber o tamanho do array, utilize length
alunos[alunos.length] = 'Flaviano';
alunos[alunos.length] = 'Bruna';
console.log(alunos);

// Forma mais prática de adicionar no final do array
alunos.push('Roberta');
console.log(alunos);

// Para adicionar no início do array
alunos.unshift('Luiza');
console.log(alunos);

// Remover o último elemento do array
const removido = alunos.pop();
console.log(removido); // Roberta
console.log(alunos);

// Remover o primeiro elemento do array
const removido2 = alunos.shift();
console.log(removido2); // Luiza
console.log(alunos);

// Fatiar o array (slice não altera o array original)
// Retorna do índice 1 até o índice 3 (sem incluir o 3)
console.log(alunos.slice(1, 3));
