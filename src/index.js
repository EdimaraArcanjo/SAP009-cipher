import cipher from './cipher.js';



const txtDeslocaC = document.getElementById('textoDeslocC')
const mensagemC = document.getElementById('msgC')
const botaoC = document.getElementById('botaoC')
const cifrado = document.getElementById('cifrado')

const txtDeslocD = document.getElementById('textoDeslocD')
const mensagemD = document.getElementById('msgD')
const botaoD = document.getElementById('botaoD')
const decifrado = document.getElementById('decifrado')

function encode(e) {
  e.preventDefault()
  cifrado.innerHTML = mensagemC.value
}


botaoC.addEventListener('click', encode) 

function decode(d) {
  d.preventDefault()
  decifrado.innerHTML = mensagemD.value
}

botaoD.addEventListener('click', decode)