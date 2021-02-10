// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

// Example

// For yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, the output should be areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 10, the output should be areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 9, the output should be areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.
// Hints

function equallyStrong(misbrazos: object , brazosAmigo: object): Boolean{
    let arrayUno = []; 
    let arrayDos = [];
    let respuesta;
    for (const key in misbrazos) {
        console.log(`${key}: ${misbrazos[key]}`);
        arrayUno.push(misbrazos[key]) }
    for (const key in brazosAmigo) {
        console.log(`${key}: ${misbrazos[key]}`);
        arrayDos.push(brazosAmigo[key]) }
    let sumaArrayUno = arrayUno.reduce(function(a,b){ return a + b})
    let sumaArrayDos = arrayDos.reduce(function(a,b){ return a + b})
    sumaArrayUno != sumaArrayDos ? respuesta = false : respuesta = true;
    return respuesta
}


// let yo = {
//     derecha: 10,
//     izquierda: 15
// }


// let amigo = {
//     derecha: 15,
//     izquierda: 10
// }

// let yo = {
//     derecha: 15,
//     izquierda: 10
// }


// let amigo = {
//     derecha: 15,
//     izquierda: 10
// }


// let yo = {
//     derecha: 15,
//     izquierda: 10
// }


// let amigo = {
//     derecha: 15,
//     izquierda: 9
// }


let yo = {
    derecha: 1,
    izquierda: 10
}


let amigo = {
    derecha: 11,
    izquierda: 10
}




console.log(equallyStrong(yo,amigo));