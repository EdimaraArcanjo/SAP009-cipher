import cipher from './cipher.js';



let deslocamentoC = document.getElementById('textoDeslocC')
let mensagemC = document.getElementById('msgC')
let botaoC = document.getElementById('botaoC')
let cifrado = document.getElementById('cifrado')

let txtDeslocD = document.getElementById('textoDeslocD')
let mensagemD = document.getElementById('msgD')
let botaoD = document.getElementById('botaoD')
let decifrado = document.getElementById('decifrado')

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