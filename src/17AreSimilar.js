// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar.
// Example
// For a = [1, 2, 3] and b = [1, 2, 3], the output should be areSimilar(a, b) = true.
// The arrays are equal, no need to swap any elements.
// For a = [1, 2, 3] and b = [2, 1, 3], the output should be areSimilar(a, b) = true.
// We can obtain b from a by swapping 2 and 1 in b.
// For a = [1, 2, 2] and b = [2, 1, 1], the output should be areSimilar(a, b) = false.
// Any swap of any two elements either in a or in b won't make a and b equal.
// Hints
// toString()
// reverse()
//------------------------------------------------------------------------------------------------------------
// La funcion tiene que devolver true or false  si los elementos de ese arrelgo pueden ordenarse de una manera que su orden pueda crear igual al orden del otro. Solo dos posiciones pueden variar entre un arreglo y otro
// Entrada: arreglo1 y arreglo2  Salida: true or false
function sonSimilares(arreglo1, arreglo2) {
    var respuesta;
    //ordenar elementos de arreglos de mayor a menor
    var arreglo1_ordenado = arreglo1.sort(function (a, b) { return a - b; });
    var arreglo2_ordenado = arreglo2.sort(function (a, b) { return a - b; });
    var cont = 0;
    for (var i = 0; i < arreglo1_ordenado.length; i++) {
        if (arreglo1_ordenado[i] === arreglo2_ordenado[i]) {
            cont = cont + 1;
            if (cont === arreglo1_ordenado.length) {
                respuesta = true;
                return respuesta;
            }
        }
        else {
            respuesta = false;
            return respuesta;
        }
    }
    //retornar true or false
    return respuesta;
}
// let array1 = [1,2,3];
// let array2 = [1,2,3];
// let array1 = [1,2,3];
// let array2 = [2,1,3];
var array1 = [1, 2, 2];
var array2 = [2, 1, 1];
console.log(sonSimilares(array1, array2));
