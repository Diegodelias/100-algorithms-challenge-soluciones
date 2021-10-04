// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

// Hints

// split()
// indexOf()
// join()
// Input/Output

// [time limit] 4000ms (js)
// [input] string inputString
// Non-empty string consisting of lowercase English characters.

// Guaranteed constraints:

// 1 ≤ inputString.length ≤ 10.

// [output] string
// The result string after replacing all of its characters.

function  alphabeticShift(palabra:String){
    let letrasPalabra = palabra.split("");
    console.log(letrasPalabra)
    let resultado = []
    letrasPalabra.forEach(letra => {
        console.log(letra.charCodeAt(0))
        if(letra.charCodeAt(0)+1 === 123){

            resultado.push(String.fromCharCode(97))
        }
        else {

            resultado.push(String.fromCharCode(letra.charCodeAt(0)+1));
        }
        
        console.log(letra.charCodeAt(0)+1)
        console.log(resultado)
        
    } );

   let final = resultado.join('')

    
    console.log(final)

    return resultado 
}


console.log(alphabeticShift("crazy"));
console.log(alphabeticShift("zorro"));
console.log(alphabeticShift("fenix"))