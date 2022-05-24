// ESVAZIANDO UM ARRAY
//Soluçao 1
let numeros = [222,32,31,424,42]
let outros = numeros
//numeros = [];
// console.log(numeros)

//Soluçao 2
numeros.length = 0;
//console.log(numeros)

//Soluçao 3
numeros.splice(0,numeros.length)
//console.log(numeros)

//Soluçao 4
while (numeros.length > 0){
    numeros.pop();
}
