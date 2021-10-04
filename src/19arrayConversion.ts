// Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

// On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product. After the algorithm has finished, there will be a single element left in the array. Return that element.
// Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be arrayConversion(inputArray) = 186.

// We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

// Hints

// push()
// Input/Output

// [execution time limit] 5 seconds (ts)
// [input] array.integer inputArray
// Guaranteed constraints:

// 1 ≤ inputArray.length ≤ 20,

// -9 ≤ inputArray[i] ≤ 99.

// [output] integer

// let parImpar = (numero) => {
//   if (numero === 0) {
//       return 'Par';
//   } else if (numero === 1) {
//       return 'Impar';
//   } else {
//       return parImpar(numero - 2);
//   }
// };
// console.log(parImpar(20)) // Par
// console.log(parImpar(75)) // Impar
// console.log(parImpar(98)) // Par
// console.log(parImpar(113)) // Impar
  
  
  // function arrayConversion (arreglo1: number[] ): number{
  //   var resultado:number;
  //   console.log(arreglo1)
  //   var arreglo1Long = arreglo1.length;
  //   // si  indici es par sumar valor en el indice actual mas valor en el indice siguiente
  //  arreglo1.forEach(function(item,index,arr){
  //   console.log(arr[index+1])
  //   if (index % 2 === 0){
  //       console.log(item)
  //       console.log(arr[index+1])
  //       arreglo1.push(item * arr[index+1])
  //       // arreglo1.splice(arr[index], arr[index+1])
      
  //   } else if (index % 2 !== 0){
  //     arreglo1.push(item + arr[index+1])
  //   }
  //   console.log(index)
  //  })

  //  console.log(arreglo1)

  //  let porcion:number=(arreglo1.length-(arreglo1.length/2));
  //  arreglo1 = arreglo1.slice(arreglo1Long)
  //  console.log(arreglo1)

  //   return resultado
  // }


  function arrayConversion(arregloEntrada:number[]): number{
   
    let esImPar = true;
     while (arregloEntrada.length !== 1 ){
      
      arregloEntrada = sumarProducto(arregloEntrada, esImPar)
      esImPar = !esImPar
    } 

   
      return arregloEntrada[0]

  }


 

  function sumarProducto(arregloOriginal: number[] , esImpar:boolean): number[] {
    const resultado: number[]=[];

    if (esImpar){

      for (var i =0; i < arregloOriginal.length ; i+=2){
        resultado.push(arregloOriginal[i] + arregloOriginal[i+1])
        console.log(resultado)
      }
      
     

    } else if (!esImpar){  


      for (var i =0; i < arregloOriginal.length ; i+=2){
       resultado.push(arregloOriginal[i] * arregloOriginal[i+1])
        console.log(resultado)
        
    }






  }
  return resultado

}


console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]))
  