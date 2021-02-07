// un grupo de personas esta haciendo una fila y necesita ser dividida en 2 equipos
// la primer  persona va al equipo1 la segunda persona va al equipo 2 la segunda 
// va en el equipo 1, la cuarta en el equipo 2 y así..

// Se te da un arregl de enteros posistivos- el peso de  cada una de las personas. Retornar un array de de 2 enteros
//donde el primer elemento es el peso total del equipo 1 y el segundo elemento is el peso total del equipo 2
// después que la división a sido completada


// Ejemplo

// For a = [50,60,60,45,70] la salida  debería ser las sumasAlternadas = [180, 105] 
// recorrer arreglo a y sumar  todo el los valores en la posicion para y todos los valores 
//en el impara y despues sumarlos al arreglo

function sumasAlternadas(arregloEnteros: number[]): number[] {
    let respuesta = [];
    let impares = [];

    for (let i = 0; i < arregloEnteros.length; i++)
        if ((i + 1) % 2 !== 0) {
            impares.push(arregloEnteros[i]);
        }
    let pares = [];
    for (let i = 0; i < arregloEnteros.length; i++)
        if ((i + 1) % 2 === 0) {
            pares.push(arregloEnteros[i]);
        }

    respuesta.push(impares.reduce((a, b) => { return a + b }));

    respuesta.push(pares.reduce((a, b) => { return a + b }));
    return respuesta;

}

console.log(sumasAlternadas([50, 60, 60, 45, 70]));

console.log(sumasAlternadas([10, 20, 60, 85, 90]));

console.log(sumasAlternadas([104, 200, 15, 25, 100 , 70]));