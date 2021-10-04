

    export const arrayChange = (arreglo1: number[] ): number =>{
  
      let resultado : number=0;
      let arreglotemp: number;
      //posicion1 es mayor posicion 0 si no es igual  o mayor sumar contador y ordenar arreglo
      //recorrer el arreglo
      //si el elementos en la poscion cero >= al elemento en la posicion siguiente 
      //sumar 1 al contador 
      //poner el elemnto menor del lado izquierdo el mayor del derecho
      //salir del loop y volver a recorrer el arreglo
  
      for ( let i = 0 ; i <= arreglo1.length ; i++){
        
          for (let j = 0; j < arreglo1.length; j++){
  
              if(arreglo1[j] >= arreglo1[j+1]){
                  arreglo1[j+1] = arreglo1[j+1] + 1 
                     resultado = resultado  + 1
             }
  
              
          }
  
      }
  
  
  
  
      return resultado
  
 
  

    }