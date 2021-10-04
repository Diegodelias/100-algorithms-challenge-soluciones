// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be checkPalindrome(inputString) = false;
// For inputString = "a", the output should be checkPalindrome(inputString) = true.
// Hints

// toLowerCase()
// split()
// reverse()
// join()
// Input/Output

// [time limit] 4000ms (js)
// [input] string inputString
// A non-empty string consisting of lowercase characters.

// Guaranteed constraints:

// 1 ≤ inputString.length ≤ 105.

// [output] boolean

// true if inputString is a palindrome, false otherwise.
function checkPalindrome(inputString: string):boolean{
// pasar a minuscula
//guardar palabra original
//convertir en array de letras palabra
//invertir palabra
//comparar palabra original con palabra invetida
//retornar true si coincidem
let res;
let original = inputString.toLowerCase();
let invertida = original.split('').reverse().join('');
console.log(invertida)
res = original === invertida ?  true :  false;

return res
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'))
console.log(checkPalindrome('Amolapaloma'));