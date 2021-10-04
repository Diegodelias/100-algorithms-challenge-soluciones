// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be arrayMaxConsecutiveSum(inputArray, k) = 8. All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8

// Input/Output

// [execution time limit] 4 seconds (js)
// [input] array.integer inputArray Array of positive integers.
// Guaranteed constraints:

// 3 ≤ inputArray.length ≤ 105,

// 1 ≤ inputArray[i] ≤ 1000.

// [input] integer k
// An integer (not greater than the length of inputArray).

// Guaranteed constraints: 1 ≤ k ≤ inputArray.length.

// [output] integer
// The maximal possible sum.

// function arrayMaxConsecutiveSum(arrayEntrada: number[], k: number): number {
//     // iterar de 2 en 2
//     // sumar valor actual de la iteracion con el valor siguiente
//     //si el resultado es mayor al maximo establecio por defecto reemplazar el maximo por ese valor
//     let maximo: number = 0;
//     for (var i = 0; i < arrayEntrada.length; i++) {

//         var suma;
//         suma = arrayEntrada[i] + arrayEntrada[i + 1];
//         if (suma > maximo) {
//             maximo = suma;
//         }
//     }

//     return maximo

// }

function arrayMaxConsecutiveSum(arrayEntrada: number[], k: number): number {
  var maximo = 0;
  for (var i = 0; i < arrayEntrada.length; i++) {
    var suma = 0;
    var iterar = i + k;
    if (iterar > arrayEntrada.length) {
      break;
    }
    for (let j = i; j < iterar; j++) {
      suma = suma + arrayEntrada[j];
    }
   
    if (suma > maximo) {
      maximo = suma;
    }
  }

  return maximo;
}
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6, 7], 3));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6, 7], 2));

// 2+3+5 = 10
// 3+5+1=9
// 5+1+6=12
// 1+6+7=14
//14

// 2+3=5
//3+5 = 8
// 5+1=6
// 1+6=7
// 6+7=13