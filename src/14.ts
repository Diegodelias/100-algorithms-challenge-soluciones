// revisar si el string dado es una subsequencia del albabeto
// ejemplo para s="effg" o s="cdce" la salida debería ser SubsecuenciaAlfabeto = false
// ejemplo para s="ace" o s="bxz" la salida debería ser SubsecuenciaAlfabeto = true
// pistas: usar propiedad size y charCodeAt

function SubsecuenciaAlfabeto(texto: String): Boolean {
  //  
  let posiciones: number[] = [];
  let string: string[] = texto.split('');
  string.forEach((valor: string) => {
    let tempCharAt = valor.charCodeAt(0);
    console.log(valor.charCodeAt(0))
    posiciones.push(tempCharAt)
  })
  if (new Set(posiciones).size !== posiciones.length) {
    return false;
  }
  for (var i = 1, len = posiciones.length; i < len; i++) {
    
    if (posiciones[i] >= posiciones[i + 1]) {
      return false;
    } else {
      return true;
    }
  }
}


console.log(SubsecuenciaAlfabeto('bxz'));