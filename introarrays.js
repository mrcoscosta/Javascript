// Introduçao  a Arrays
// add novas Arrays
const numero = [2, 3, 4]
numero.unshift(5) // add elemeno no comeco dp array
console.log(numero)

numero.splice(2, 3,'a')// add no meio do array
console.log(numero)

numero.push(5);// add no fim do array
console.log(numero);

const nome = ['marcos','feio']
nome.unshift('lindo');
nome.splice('marcos','santos');
nome.push('costa')
console.log(nome)

// REMOVENDO ELEMENTOS 
const numer = [10,2100,4,456,9]
numer.pop() // remove o ultimo elemento
console.log(numer)

numer.shift() // remove o primeiro
console.log(numer)

numer.splice(1,1) // remove o do meio
console.log(numer)


// ENCONTRANDO ELEMENTOS (PRIMITIVOS)
 const arr = [1,0,2,0,5,0,3,0]
 console.log(arr.indexOf(5))
 console.log(arr.lastIndexOf(0))
 console.log(arr.includes(5)) // forma mas simplles de achar

 //ENCONTRANDO ELEMENTOS (TIPOS DE REFERENCIA)
 const pessoa = [
     {nome:'marcos', idade: 22},
     {nome:'adrinao', idade: 34}
 ]

 const pessoas = pessoa.find(function(pessoas) {
     return pessoas.idade === 22
 })
 console.log(pessoas)
