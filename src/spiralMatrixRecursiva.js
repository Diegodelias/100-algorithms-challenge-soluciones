function spiralMatrix(numero){

    let numEntrada = numero;

    let inicial = new Array();
    for (var i=0; i < numEntrada; i++){
        inicial[i]=new Array(numEntrada);
        for (var j =0; j < numEntrada ; j++){
            inicial[i][j]= '*';}}


    let inicioFila=0;
    let finFila = numero -1 ;
    let inicioColumna = 0;
    let finColumna = numero -1 ;

    if (inicioFila  === finFila   && finColumna  === inicioColumna ) {

    } else {

        for (let i = inicioColumna; i <= finColumna ; i++){
            console.log(inicioFila)
            inicial[inicioFila][i] = 0;
        }
        

        for (let j=inicioFila; j <= finFila; j++){
            console.log(inicioFila)
            inicial[j][finColumna] = 1;
        }

        finColumna --;
        inicioFila +=2;

        for (let k= finColumna; k >= inicioColumna ; k-- ){
            inicial[finFila][k] = 2;
        }

        finFila--;

        for (let l = finFila ; l >= inicioFila ; l-- ){

            inicial[l][inicioColumna] = 3;
        }

        inicioColumna++;


    }

    console.log(inicial)
}

console.log(spiralMatrix(5))