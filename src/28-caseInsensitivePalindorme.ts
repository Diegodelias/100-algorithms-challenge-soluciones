
// Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.

// Example

// For inputString = "AaBaa", the output should be isCaseInsensitivePalindrome(inputString) = true.
// "aabaa" is a palindrome as well as "AABAA", "aaBaa", etc

// For inputString = "abac", the output should be isCaseInsensitivePalindrome(inputString) = false.
// All the strings which can be obtained via changing case of some group of letters, i.e. "abac", "Abac", "aBAc" and 13 more, are not palindromes.

// Hints

// join()
// reverse()
// toLowerCase()
// split()
// Input/Output

// [execution time limit] 5 seconds (ts)

// [input] string inputString

// Non-empty string consisting of English letters. Guaranteed constraints: 4 ≤ inputString.length ≤ 10

// [output] boolean

function isCaseInsensitivePalindrome(inputString: string): boolean {
    // pasar a lowercase
    //guardar string pasado a minusculas
    //invertir string pasado a minusculas y pasarlo a otra variable
    //comparar string pasado a minusculas con la otra variable
    // si son iguales retornar true
    let res = true;
    let originalStr = inputString.toLowerCase();
    let invertido = originalStr.split('').reverse().join('')
    if (originalStr != invertido){
        res = false;
    }
    return res

}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'))
console.log(isCaseInsensitivePalindrome('Amolapaloma'));
console.log(isCaseInsensitivePalindrome('soplamelaquena'))
console.log(isCaseInsensitivePalindrome('Isaacnoroncaasi'))