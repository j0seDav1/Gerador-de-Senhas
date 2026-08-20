const numeroSenha = document.querySelector('.parametro-senha__texto')
numeroSenha.textContent = 5;

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha

const botoes =  document.querySelectorAll('.parametro-senha__texto')



botoes[o].onclick = diminuir;

function diminuir() {
    tamanhoSenha--;
    numeroSenha.textContent = tamanhoSenha
}