
const cipher = {
  encode:encode,
  decode:decode
};

export default cipher;

function encode(deslocamento,mensagemC) {
  let msgrecebidaC = ""
  if (typeof mensagemC !== "string" || mensagemC === "" || deslocamento==="" ) {
    throw new TypeError
  }
    
  const offset = Number.parseInt(deslocamento)
  for (let i = 0 ; i < mensagemC.length ; i++ ) {
    const conta = ((mensagemC.charCodeAt(i) - 65 + offset) % 26) + 65;
    msgrecebidaC += String.fromCharCode(conta);
  }
  return msgrecebidaC
}

function decode(deslocamento, mensagemD) {
  return encode(-deslocamento,mensagemD)
  // let msgrecebidaD = ""
  // if (typeof mensagemD !== "string" || mensagemD === "" || deslocamento==="" ) {
  //   throw new TypeError
  // }
    
 
  // const offset = Number.parseInt(deslocamento)
  // for (let i = 0 ; i < mensagemD.length ; i++ ) {
  //   const conta = ((mensagemD.charCodeAt(i) + 65 - offset) % 26) + 65;
  //   msgrecebidaD += String.fromCharCode(conta);
  // } 
  // return msgrecebidaD 
}









