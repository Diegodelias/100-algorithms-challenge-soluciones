// Given an array of strings, return another array containing all of its longest strings.
// Example
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
// Hints
// None
// Input/Output
// [time limit] 4000ms (js)
// [input] array.string inputArray
// A non-empty array.
// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10.
// [output] array.string
// Array of the longest strings, stored in the same order as in the inputArray.
function allLongestStrings(palabras) {
    var masLargo = 0;
    var resFinal = [];
    for (var i = 0; i <= palabras.length - 1; i++) {
        if (palabras[i].length >= masLargo) {
            masLargo = palabras[i].length;
            resFinal.push(palabras[i]);
        }
    }
    resFinal = resFinal.filter(function (palabra) { return palabra.length === masLargo; });
    return resFinal;
}
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba", "afcdsde"]));

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba", "afcdsde","wewewew"]));
