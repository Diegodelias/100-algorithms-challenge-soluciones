
// ir de izquierda a derecha al llegar a limite derecho de arriba a abajo al llegar 
// abajo de dercha a izquierda al llegar al lite izquierdo dede abaajo hacia arriba

function spiralmatrix(numEntrada){
    // llenar array inicial
    let inicial = new Array();
    for (var i=0; i < numEntrada; i++){
        inicial[i]=new Array(numEntrada);
        for (var j =0; j < numEntrada ; j++){
            inicial[i][j]=0;}}

//    inicio fila
   let  inicioFila  = 0;
   let finFila =  inicial.length -1 ;
   let bordeIzq = 0;
   let bordeDer = inicial[0].length -1;
   console.log(finFila);
   console.log(bordeDer);
   let contador = 0;
  
   //largo de filas * largo de columnas
   let tamanio = inicial.length * inicial[0].length;
    while(inicioFila <= finFila && bordeIzq <= bordeDer  ){
    console.log(inicioFila)
    for (let i = bordeIzq; i <= bordeDer ; i++){
        inicial[inicioFila][i]=1
     
    
       }
       inicioFila++
     
       
       
       

        for (let i = inicioFila ; i <= finFila  ; i++){
          
            inicial[i][bordeDer] = 1;
            console.log(finFila )
            console.log(inicioFila)
         
         
        }
        bordeDer--
        
        
        

    
     

    for (let i = bordeDer ;  i >= bordeIzq ; i--){
        inicial[finFila][i]=1;
        
        
    }
   
    finFila--
    
    // inicioFila++
    

    for (let i = finFila ; i >= inicioFila ; i-- ){

            inicial[i][bordeIzq]=1;
        


    }
    inicioFila++
  
    
    
    // bordeDer--
    
    
 
    
    
  

}
 
return  inicial

}

console.log(spiralmatrix(5));