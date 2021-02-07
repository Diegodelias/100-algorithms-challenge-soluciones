//dado un string reemplazar cada uno de sus caracteres por el que sigue en el alfabeto
//por ejemplo para elel string "crazy" la salida debería  ser dsbaz
//pistas split, indexOf(),  join


function cambiarPorLetraSiguiente( palabra : String): String{
    let resultado;

    var caracteresEspeciales = "!@#$^&%*()+=-[]\/{}|:<>?,.";
    
    let arreglo = palabra.split('');

    let arregloNuevo = arreglo.map(function(x){

        return String.fromCharCode(x.charCodeAt(0) + 1);
    })

    resultado = arregloNuevo.join()

    for (var i = 0; i < caracteresEspeciales.length; i++) {

    resultado = resultado.replace(new RegExp("\\" + caracteresEspeciales[i], "gi"), "");

   
    }
    

    
    //recorrer arreglo  y guardar  cada letra sumandole un uno a su posicion



    return resultado;


}


console.log(cambiarPorLetraSiguiente( 'campos' ));
