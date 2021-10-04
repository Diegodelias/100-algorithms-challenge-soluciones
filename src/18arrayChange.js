// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
// Example
// For inputArray = [1, 1, 1], the output should be arrayChange(inputArray) = 3.
// Input/Output
// [time limit] 4000ms (js)
// [input] array.integer inputArray
// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 105,
// -105 ≤ inputArray[i] ≤ 105.
// [output] integer
// The minimal number of moves needed to obtain a strictly increasing sequence from inputArray. It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.
function arrayChange(arreglo1) {
    var resultado = 0;
    var arreglotemp;
    //posicion1 es mayor posicion 0 si no es igual  o mayor sumar contador y ordenar arreglo
    //recorrer el arreglo
    //si el elementos en la poscion cero >= al elemento en la posicion siguiente 
    //sumar 1 al contador 
    //poner el elemnto menor del lado izquierdo el mayor del derecho
    //salir del loop y volver a recorrer el arreglo
    for (var j = 0; j < arreglo1.length; j++) {
        if (arreglo1[j] >= arreglo1[j + 1]) {
            var difference = (arreglo1[j] + 1) - arreglo1[j + 1];
            arreglo1[j + 1] = arreglo1[j + 1] + 1;
            resultado += difference;
        }
    }
    return resultado;
}
console.log(arrayChange([1, 2, 1]));
