// exercício
/* fazer este exercicio usando a entrada de nome do usuário
Seu nome é:
Seu nome tem ______ letras
A segunda letra do seu nome é: ______
Qual o primeiro índice da letra LETRA no seu nome? ______
Qual o último índice da letra LETRA no seu nome? ______
As últimas 3 letras do seu nome são: ______
As palavras do seu nome são: ______
Seu nome com letras maiúsculas: ______
Seu nome com letras minúsculas: ______
*/

const nome = prompt('Digite seu nome: ');
document.body.innerHTML += `O seu nome é: ${nome}. <br/>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras. <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br/>`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA I no seu nome? ${nome.indexOf('i')} <br/>`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${nome.lastIndexOf('i')} <br/>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3, nome.length)} <br/>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br/>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br/>`;