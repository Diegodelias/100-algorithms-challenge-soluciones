// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be arrayMaximalAdjacentDifference(inputArray) = 3.

// For inputArray = [2, 9, 1, 0], the output should be arrayMaximalAdjacentDifference(inputArray) = 8.

// Hints

// Math.abs()
// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer inputArray
// Guaranteed constraints:

// 3 ≤ inputArray.length ≤ 10,

// -15 ≤ inputArray[i] ≤ 15.2

// [output] integer
// The maximal absolute difference.

function arrayMaximalAdjacentDifference(arrayEntrada:number[]): number{
    let max=0;

    for (var i =0 ; i < arrayEntrada.length ; i++){
     
        let dif = Math.abs(arrayEntrada[i] - arrayEntrada[i+1]);

        if( dif > max){
            max = dif;
        }
    }
  return max

}

console.log(arrayMaximalAdjacentDifference([2,4,1,0]))
//resultado 3

console.log(arrayMaximalAdjacentDifference([2,9,1,0]))
//8

console.log(arrayMaximalAdjacentDifference([3,7,12,22]))