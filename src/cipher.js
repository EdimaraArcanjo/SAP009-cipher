
const cipher = {
  encode:encode,
  decode:decode
};

export default cipher;

function encode(deslocamento,mensagemC) {
  let msgrecebidaC = ""
  //if (typeof deslocamento !== "number" || mensagemC !== "string" || mensagemC === "" || deslocamento==="" || mensagemC === 0 || deslocamento===0) //throw new TypeError//
 
  const offset = Number.parseInt(deslocamento)
  for (let i = 0 ; i < mensagemC.length ; i++ ) {
    const conta = ((mensagemC.charCodeAt(i) - 65 + offset) % 26) + 65;
    msgrecebidaC += String.fromCharCode(conta);
  }
  return msgrecebidaC
}

function decode(deslocamento, mensagemD) {
  let msgrecebidaD = ""
  //if (typeof deslocamento !== "number" || mensagemD !== "string" || mensagemD === "number") //throw new TypeError//
 
  const offset = Number.parseInt(deslocamento)
  for (let i = 0 ; i < mensagemD.length ; i++ ) {
    const conta = ((mensagemD.charCodeAt(i) + 65 - offset) % 26) + 65;
    msgrecebidaD += String.fromCharCode(conta);
  } 
  return msgrecebidaD 
}









