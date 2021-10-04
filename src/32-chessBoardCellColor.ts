// Algorithm Challenge Available At CodeFights
// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be chessBoardCellColor(cell1, cell2) = true.
// ;

// For cell1 = "A1" and cell2 = "H3", the output should be chessBoardCellColor(cell1, cell2) = false.


// Hints

// parseInt()
// Input/Output

// [time limit] 4000ms (js)
// [input] string cell1
// [input] string cell2
// [output] boolean
// true if both cells have the same color, false otherwise.

function chessBoardCellColor(cell1: string, cell2: string): boolean {
let res =false
let cell1Split = cell1.split('');
//letra1
cell1Split[0] = cell1Split[0].toLowerCase() 
let cell2Split = cell2.split('');
//letra2
cell2Split[0] = cell2Split[0].toLowerCase()
const posicionesImpar = [1,0,1,0,1,0,1,0]
const posicionesPar = [0,1,0,1,0,1,0,1]
const letras = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7
}
const tablero = {
  1 : posicionesImpar,
  2 : posicionesPar,
  3 : posicionesImpar,
  4 : posicionesPar,
  5 : posicionesImpar,
  6 : posicionesPar,
  7 : posicionesImpar,
  8 : posicionesPar,
}
//numero en el tablero fila
let celda1Array = tablero[cell1Split[1]]
let celda1 = letras[cell1Split[0]];
let valor1 = celda1Array[celda1]
let celda2Array = tablero[cell2Split[1]];
let celda2 = letras[cell2Split[0]];
let valor2 = celda2Array[celda2];
if (valor1 === valor2){
  res = true;
}
return res
}

console.log(chessBoardCellColor('A1','C3'))
console.log(chessBoardCellColor('A1','H3'))
console.log(chessBoardCellColor('D3','B3'))
console.log(chessBoardCellColor('C3','B3'))
console.log(chessBoardCellColor('H8','C5'))
console.log(chessBoardCellColor('H8','C6'))
console.log(chessBoardCellColor('D7','G2'))
console.log(chessBoardCellColor('D6','G2'))