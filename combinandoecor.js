// COMBINANDO OU MARGEAR E CORTAANDO ARRAS
const primeiro1 = ['m','a', 'r']
const segundo1 = ['c','o','s']
primeiro1[0] = 'M'
//combinar
const combinado = primeiro1.concat(segundo1)
console.log(combinado)
// OUTRA FORMA 
console.log(primeiro1.push.applly(primeiro1,segundo1))

 // dividir

 const cortado = combinado.slice()
 console.log(cortado)

 // OPERADOR SPREAD => NOVA FORMA DE FAZER COOPIA E CLONAGEM DE ARRAYS
 const primeiro = [1,2,3,'x']
const segundo = [4,5,6]

// const combinado = primeiro.concat((segundo));
const combinado1 = [...primeiro,4,...segundo,5]
console.log(combinado1)
 // const cortado = combinado.slice()
 const cortado1 = [...combinado1]
 console.log(cortado1)
