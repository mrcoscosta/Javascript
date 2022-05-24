 //objeto
let pessoa = {
    nome: "Marcos",
    idade:  22,
    sobreNome: "santos",
    peso: 75,
    hobies: ['dumir','estudar progrmacao']

}
// metodo mas facil de accesar as propriedades do objeto
const {nome: firstName,idade,sobreNome,peso,hobies} = pessoa;

// array de objetos

const todos = [
    {
        id:1,
        descricao:'estudando programação',
        completo: false
    },
    {
        id:2,
        descricao: 'ler',
        completo:true
    },
    {
        id:3,
        descricao:'treinar',
        complete: 'por hoje'
    },
]

const descricaoTodos = todos[2].descricao
console.log(descricaoTodos)
/*arrays
let familia = [28, 54, 3, 4]
familia.push()
console.log(familia)
*/

/* exe
let nomeDoColega = ["marcos", "sao luis", 22]
console.log(nomeDoColega)
*/

/* verbo + substantivo => FUNCAO
let toalha = "cara"
function trocaToalha(preco,tamanho){
    toalha = preco + tamanho
}
console.log(toalha)
trocaToalha("20 reais"," G")
console.log(toalha)
*/

// Tipos de funcao=> Realza uma tarefa , nao devolve nada
function DizerNome (){
    console.log("marcos")
}
DizerNome()

// faz calculo ou opercao e retorna algo
function MultiplicarPorCinco(valor){
    return valor*5
}
//console.log(MultiplicarPorCinco(10))
let resultado = MultiplicarPorCinco(5)
console.log(resultado)



