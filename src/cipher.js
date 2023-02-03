export function encode( mensagemC, deslocamento) {
  let msgrecebidaC = ""
  const offset = Number.parseInt(deslocamento)
  for (let i = 0 ; i < mensagemC.length ; i++ ) {
    const conta = ((mensagemC.charCodeAt(i) - 65 + offset) % 26) + 65;
    msgrecebidaC += String.fromCharCode(conta);
  }
  return msgrecebidaC
}

export function decode( mensagemD, deslocamento) {
  let msgrecebidaD = ""
  const offset = Number.parseInt(deslocamento)
  for (let i = 0 ; i < mensagemD.length ; i++ ) {
    const conta = ((mensagemD.charCodeAt(i) - 65 - offset) % 26) + 65;
    msgrecebidaD += String.fromCharCode(conta);
  } 
  return msgrecebidaD 
}









