// MAP - FILTER - REDUCEE melhores metodos pra lista
// map => vai executar uma determinda funcao em cada item,
// da lista e retorna uma nova lista com essa funcao executada em todos os itens
const numeros = [5,4,3,2,1]

const SomarNumeros = numeros.map(function(item){
    return item * 2;
})
console.log(SomarNumeros)
// filter => ele vai filtra uma lista e retorna uma nova lista
const idades = [21,22,43,54,10]

const parIdades = idades.filter(function(item){
    return item % 2 === 0

})
console.log(parIdades)

// reduce => pra quando agente quer reduzir todos os valores de uma lista pra um sO
const Ids = [2,34,5,3,7,33]

const somaIds = Ids.reduce(function(item, accumulator){
    return accumulator + item
},0)
console.log(somaIds)

// exercicio
const Numbers = [1,2,3,4,5,6,7,8,9,10]

const somaNumbers = Numbers.reduce(function(item,accumulator){
    return accumulator + item
},0)
console.log(somaNumbers);

