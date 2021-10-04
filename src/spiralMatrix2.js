function spiralMatrix(numero){
// crear array vacio
 const final = [];
// inicio primer loop
// por cada iteracion aca continuaremos iterano mientras i sea
// meno que numero e iremos haciendo push a un subarray vacío en el arreglo principal
 for (let i = 0; i < numero ; i++){

    final.push([])


 }

 let contador = 1; //numero que vamos pusheando al arreglo
 let inicioColumna =0; //columna inicial
 let finColumna = numero - 1; //columna final
 let inicioFila = 0; //fila inicial
 let finFila = numero - 1; //fila final

 while (inicioColumna <= finColumna && inicioFila <= finFila ){
//    FILA HORIZONTAL SUPERIOR
    for (let i = inicioColumna; i <= finColumna ;  i++){
        final[inicioFila][i] = contador;
        contador++
    }   

    inicioFila++;
   ;// una vez terminado el for bajamos una fila
    console.log(inicioFila)

    for ( let i = inicioFila; i <= finFila ; i++){
        console.log(contador)
        console.log(i)
        final[i][finColumna] = contador;
        console.log(finColumna)
        contador++
    }

    finColumna-- // desde la derecha hacia la izquierda solo en la columna final
// terminado el loop hacemos decremento de columna
    for (let i = finColumna; i >= inicioColumna ; i-- ){
        final[finFila][i] = contador;
        contador++;
    }

    finFila--
    

    for(let i = finFila ; i >= inicioFila ; i-- ){
        final[i][inicioColumna] = contador;
        contador++
    }
    inicioColumna++

 }


return final;
}

console.log(spiralMatrix(5))