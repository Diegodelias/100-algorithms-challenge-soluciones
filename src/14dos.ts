// Check whether the given string is a subsequence of the plaintext alphabet.

// Example

// For s = "effg" or s = "cdce", the output should be alphabetSubsequence(s) = false

// For s = "ace" or s = "bxz", the output should be alphabetSubsequence(s) = true.

// Hints

// size property
// charCodeAt()
// split()


function alphabetSubsequenceOrder( texto : String): Boolean{
   
    var respuesta : Boolean = true;
    let arreglo: string[] = texto.split('');
    const set = new Set();
    let temp;
    arreglo.forEach(letra =>{
     
        set.add(letra.charCodeAt(0));

    })

    if (set.size != arreglo.length){
        respuesta = false;
    }

    for (let i = 0; i < arreglo.length-1 ; i++){
     
        if (arreglo[i].charCodeAt(0) > arreglo[i+1].charCodeAt(0)){
            respuesta = false;
        }

    }
    console.log(set.size)
    console.log(arreglo.length)
    



    return respuesta
}



console.log( alphabetSubsequenceOrder('effg'))
console.log( alphabetSubsequenceOrder('ace'))
console.log( alphabetSubsequenceOrder('cdce'))
console.log( alphabetSubsequenceOrder('bxz'))
console.log( alphabetSubsequenceOrder('zab'))