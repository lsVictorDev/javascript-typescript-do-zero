const entrada = Number(prompt('Digite um número:'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = entrada;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${(entrada ** (1/2))}</p>`;
texto.innerHTML += `<p>${entrada} é inteiro: ${Number.isInteger(entrada)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(entrada)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(entrada)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(entrada)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${entrada.toFixed(2)}</p>`

// Exercício gabaritado
