const numeroSenha = document.querySelector('.parametro-senha__texto')
numeroSenha.textContent = 5;
const campoSenha = document.querySelector('#campo-senha')

campoSenha.value = 'Coloque a Senha'

let letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'
let numeros = '1234567890'

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha

const botoes =  document.querySelectorAll('.parametro-senha__botao')



botoes[0].onclick = diminuir;

function diminuir() {
    tamanhoSenha--;
    numeroSenha.textContent = tamanhoSenha
}

botoes[1].onclick = aumentar

function aumentar() {
    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha
}




geraSenha()

function geraSenha(){
    let senha = ''

    for(let i - 0; i < tamanhoSenha){
        let numeroAleatorio = Math.random() * 26;
        numeroAleatorio = Math.floor(numeroAleatorio)
        senha = senha + letrasMaiusculas[numeroAleatorio]
    }
    campoSenha.valvue = senha;
}