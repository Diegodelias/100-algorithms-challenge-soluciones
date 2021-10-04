// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be avoidObstacles(inputArray) = 4.

// Hints

// sort()
// every()
// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer inputArray
// Non-empty array of positive integers.

// Guaranteed constraints:

// 2 ≤ inputArray.length ≤ 10,

// 1 ≤ inputArray[i] ≤ 40.

// [output] integer
// The desired length.

function avoidObstacles(inputArray: number[]):number {

    let res;
    let ordenado = inputArray.sort((a,b)=> a-b)
    let numeroMasAlto = inputArray[(ordenado.length-1)]
    console.log(numeroMasAlto)

    for (let i = 1; i< numeroMasAlto + 1; i++){
        ordenado.forEach(element => {
           console.log (element % i)
        });

        if(inputArray.every((element)=>
            // si el numero no es divisible por ninguno de los elementos es decir no es ninguno de los elementos
           element % i !== 0
           )) {
            
            // retorna numero de la iteracion por el cual ninguno de los elementos del array es divisible
            console.log(i)
            res = i
            return i

           }

        
        
        
    }

   
    return res

}

console.log(avoidObstacles([5,3,6,7,9]));