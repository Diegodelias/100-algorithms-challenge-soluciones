// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be (inputArray) = 21.

// 7 and 3 produce the largest product.

// Hints

// None
// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer inputArray
// An array of integers containing at least two elements.

// Guaranteed constraints:

// 2 ≤ inputArray.length ≤ 10, -1000 ≤ inputArray[i] ≤ 1000.

// [output] integer
// The largest product of adjacent elements.

function adjacentElementsProduct(arreglo: number[]):number{
    
    let numMayor = arreglo[0] *  arreglo[1];

    for (let i=1 ; i <= arreglo.length -1 ; i++) {

        var resmulti = arreglo[i] * arreglo[i+1];
        console.log(resmulti)

        if (resmulti > numMayor){
            numMayor =  resmulti;
        }


    }



    return numMayor;

}

 console.log(adjacentElementsProduct([3,6,-2,-5,7,3]))