import {encode, decode} from './cipher.js';



const txtDeslocaC = document.getElementById('textoDesloC')
const mensagemC = document.getElementById('msgC')
const botaoC = document.getElementById('botaoC')
const cifrado = document.getElementById('cifrado')

const txtDeslocD = document.getElementById('textoDesloD')
const mensagemD = document.getElementById('msgD')
const botaoD = document.getElementById('botaoD')
const decifrado = document.getElementById('decifrado')

function cifrar(e) {
  e.preventDefault()
  cifrado.innerHTML = encode(mensagemC.value,txtDeslocaC.value)
}


botaoC.addEventListener('click', cifrar) 

function decifrar(d) {
  d.preventDefault()
  decifrado.innerHTML = decode(mensagemD.value,txtDeslocD.value)
}

botaoD.addEventListener('click', decifrar)