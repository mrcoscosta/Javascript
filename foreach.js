//  INTERANDO ARRAYS
const numeros = [7,273,54,65]
for (numero of numeros)
    console.log(numero)



// nova forma chamada => FOREACH
const letras = ['m','a','r','c','o','s']
letras.forEach((letra,indice)=> console.log(letra,indice))

// COMBIANANDO USANDO JOIN E SPLIT
const nome = [2,3,4,5,5]

const combinado = nome.join('-')
console.log(combinado)

const frase = " marcos novo dev da area"
const resultado  = frase.split(' ')
console.log(resultado)

console.log(resultado.join('-'))