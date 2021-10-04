
// Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

// Example

// For items = [3, 5, 2, 4, 5], the output should be arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

// Hints

// unshift()
// Input/Output

// [execution time limit] 5 seconds (ts)

// [input] array.integer items

// Non-empty array of positive integers.

// Guaranteed constraints:

// 3 ≤ items.length ≤ 15,

// 1 ≤ items[i] ≤ 200.

// [output] array.integer

// Array containing answer values computed as described above.

function arrayPreviosLess(items: number[]): number[] {
    const resultado: number[] = [];

    for (let i = items.length - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            if (items[i] > items[j]) {
                resultado.unshift(items[j])
                break;
            } else if (j === 0) {
                resultado.unshift(-1)
                break;
            }
        }
    }


    return resultado;
}

console.log(arrayPreviosLess([3, 5, 2, 4, 5]))

// [-1, 3, -1, 2, 4]
