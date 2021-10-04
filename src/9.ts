// You are given a two-digit integer n. Return the sum of its digits.

// Example

// For n = 29, the output should be addTwoDigits(n) = 11.

// Hint

// split()
// parseInt()
// toString()
// reduce()
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive two-digit integer.

// Guaranteed constraints:

// 10 ≤ n ≤ 99.

// [output] integer

// The sum of the first and second digits of the input number.
function iterate(item) {
    console.log(typeof(item));
  }

function addTwoDigits(numero: number):number {
    let resultado;
    let numeroOriginalString = numero.toString().split('');
    let numeroOriginalEntero = numeroOriginalString.map(Number)
    resultado = numeroOriginalEntero.reduce((a:number,b:number)=> a + b, 0) 
     return resultado
}
console.log(addTwoDigits(29));
console.log(addTwoDigits(2022))
console.log(addTwoDigits(42))
console.log(addTwoDigits(24))