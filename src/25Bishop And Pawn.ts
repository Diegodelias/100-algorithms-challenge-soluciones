// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:



// Example

// For bishop = "a1" and pawn = "c3", the output should be bishopAndPawn(bishop, pawn) = true.


// Hint

// parseInt()
// Input/Output

// [time limit] 4000ms (js)
// [input] string bishop
// Coordinates of the white bishop in the chess notation.

// [input] string pawn
// Coordinates of the black pawn in the same notation.

// [output] boolean
// true if the bishop can capture the pawn, false otherwise.
// recorrer fila de la matrix si la posicion es menor a todas las columnas de esa fila y mayor  a la poscion incial de esa  fila avanzar fila una posicion
function bishopAndPawn(bishop: string, pawn: string): boolean {
    let res: boolean = false;
    let tableroMain = [];
    let letras = ["a", "b", "c", "d", "e", "f", "g", "h"];
  
    let contador = 1;
   
    let indice = 0;
    let coordenadas = {}
    // crear tablero vacio
    for (var i = 0; i < 8; i++) {
        tableroMain.push([])
        tableroMain[i].push(new Array(8));
        for (let j = 0; j < 8; j++) {
            tableroMain[i][j] = contador;
            contador++ } }
   
    // crear objeto con referncias a posiciones en el tablero
    for (let x = tableroMain.length - 1; x >= 0; x--) {
       
        for (let y = 0; y <= 7; y++) {
             coordenadas[(letras[y]) + x] = [x, y]
           } }
    const coordenadasFinal = {}
    let tempnumero = []
    let templetra =[]
    let tempPropiedades=[]
    Object.entries(coordenadas).forEach(entrada =>{
       
        tempPropiedades.push(entrada[1])
        templetra.push(entrada[0].slice(0,1))
        tempnumero.push(parseInt(entrada[0].slice(1))+1)
         

        indice++
    })
 
    let objetoKey = templetra.map(function(elem,index){

        return elem + tempnumero[index]

    });
    
    
    objetoKey.forEach((key,i)=> coordenadasFinal[key] = tempPropiedades[i] )

    let AlfilBlanco = coordenadasFinal[bishop];
    let AlfilBlancoFila = AlfilBlanco[0];
    let AlfilBlancoColumna = AlfilBlanco[1];
    let AlfilFilaDSI = AlfilBlanco[0];
    let AlfilColumnaDSI = AlfilBlanco[1];
    let AlfilFilaDInfI = AlfilBlanco[0];
    let AlfilColumnaDinfI = AlfilBlanco[1];
    let AlfilFilaDInfD = AlfilBlanco[0];
    let AlfilColumnaDinfD = AlfilBlanco[1];

    let peonNegro = coordenadasFinal[pawn] ;
    let peonNegroFila = peonNegro[0];
    let peonNegroColumna = peonNegro[1];
       //hacia arriba y hacia la derecha
    
    while( AlfilBlancoFila >= 0  && AlfilBlancoColumna <= tableroMain.length){
        
        if (AlfilBlancoFila === peonNegroFila && AlfilBlancoColumna === peonNegroColumna ){

            res =true
            break;
        }
      
        AlfilBlancoFila =AlfilBlancoFila - 1;
        AlfilBlancoColumna +=1;


}

 //hacia arriba y hacia la izquierda
 while( AlfilFilaDSI >= 0  && AlfilColumnaDSI >= 0){
    if (AlfilFilaDSI === peonNegroFila && AlfilColumnaDSI === peonNegroColumna ){

        res =true
        break;
    }
    

    AlfilFilaDSI=AlfilFilaDSI- 1;
    AlfilColumnaDSI -=1;

 }

  //hacia abajo  y hacia la izquierda
  while( AlfilFilaDInfI <= 7  && AlfilColumnaDinfI >= 0){
    if (AlfilFilaDInfI === peonNegroFila && AlfilColumnaDinfI === peonNegroColumna ){

        res =true
        break;
    }
   

    AlfilFilaDInfI +=1;
    AlfilColumnaDinfI -=1;

 }

 //hacia abajo  y hacia la derecha
 while( AlfilFilaDInfD <= 7  && AlfilColumnaDinfD <= tableroMain.length){

    if (AlfilFilaDInfD === peonNegroFila && AlfilColumnaDinfD === peonNegroColumna ){

        res =true
        break;
    }

    AlfilFilaDInfD +=1;
    AlfilColumnaDinfD +=1;

 }



    return res;
}

console.log(bishopAndPawn('a1', 'c3'))

console.log(bishopAndPawn('d1', 'b3'))

console.log(bishopAndPawn('d4', 'a7'))
console.log(bishopAndPawn('d3', 'g6'))
console.log(bishopAndPawn('a1', 'c4'))
console.log(bishopAndPawn('e3', 'h1'))