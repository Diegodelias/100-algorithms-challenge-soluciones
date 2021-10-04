// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//        "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                   "*abc*",
//                   "*ded*",
//                   "*****"]
// Hints

// concat()
// unshift()
// push()
// Input/Output

// [time limit] 4000ms (js)
// [input] array.string picture
// A non-empty array of non-empty equal-length strings.

// Guaranteed constraints:

// 1 ≤ picture.length ≤ 5,

// 1 ≤ picture[i].length ≤ 5.

// [output] array.string
// The same matrix of characters, framed with a border of asterisks of width 1.


function addBorder(picture: string[]):any {
    const largopared =picture[0].length + 2;
    let pared = '';

    for (let i = 0 ;  i < largopared ; i++){
        pared = pared.concat('*')
        

    }

    picture.unshift(pared);
    picture.push(pared);
        
        for  (var i=1; i < picture.length -1  ; i++){

            let picturetemp = picture[i].split('');
            console.log(picturetemp)
            picturetemp.unshift('*')
            picturetemp.push('*')
            // picture1temp.join("")
    
            picture[i] = picturetemp.toString().replace(/,/g, '');





        }
 

    
    return picture
}

console.log(addBorder(["abc", "ded"]));