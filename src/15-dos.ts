// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

// Example

// For a = [50, 60, 60, 45, 70], the output should be alternatingSums(a) = [180, 105].

// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer a
// Guaranteed constraints:

// 1 ≤ a.length ≤ 10,

// 45 ≤ a[i] ≤ 100.

// [output] array.integer

function alternatingSums(numeros : number[]) : number[] {
   let resultado = [];
   let acuPar = 0;
   let acuImpar = 0;
   for ( let i  = 0; i <= numeros.length-1 ; i++){
        if( i % 2 === 0){
            console.log(numeros[i])
            acuPar = acuPar + numeros[i];
            console.log(acuPar)
        } else {
           
            acuImpar = acuImpar + numeros[i];
            console.log(numeros[i])
            console.log(acuImpar)
        }

   

   }

   resultado.push(acuPar);
   resultado.push(acuImpar)

   return resultado
}


function alternatingSumsDOS(numeros : number[]) : number[] {
    let resultado = [];
    let pares = numeros.filter(function(item,index){
        return (index % 2 == 0)
    })
    let impares = numeros.filter(function(item,index){
        return (index % 2 !== 0)
    })
    resultado.push(pares.reduce((acu, item)=>{
        let totalPares = acu + item
        return  totalPares;}))

    resultado.push(impares.reduce((acu, item)=>{
        let totalPares = acu + item
        return  totalPares;}))
    return resultado

}





console.log(alternatingSums([50, 60, 60, 45, 70,101]))
console.log(alternatingSumsDOS([50, 60, 60, 45, 70, 101]))