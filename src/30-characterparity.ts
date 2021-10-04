// Given a character, check if it represents an odd digit, an even digit or not a digit at all.

// Example

// For symbol = '5', the output should be characterParity(symbol) = "odd";
// For symbol = '8', the output should be characterParity(symbol) = "even";
// For symbol = 'q', the output should be characterParity(symbol) = "not a digit".
// Hints

// isNaN()
// parseInt()
// Input/Output

// [execution time limit] 5 seconds (ts)
// [input] char symbol
// [output] string

function characterParity(entrada: string): string{
    let res;
    if(isNaN(entrada)){
        res = "no es un digito"
    } else{
        if (parseInt(entrada)%2 === 0){
            res = "par"
        } else {
            res = "impar"
        }
    }



    return res
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))