// faixa de preço 'exercicio
let faixas = [
    {tooltip: 'ate 700', minimo: 0,maximo: 700},
    {tooltip: 'de 700 a 1000', minimo: 700, maximo: 1000}

];

// segunda opcao (factory function)
function criarFaixa(tooltip,minimo,maximo){
return {
    tooltip,
    minimo,
    maximo
    }
}
let faixa2 = [
    criarFaixa('a',0,700),
    criarFaixa('b',700,1000)
];

// terceira opcao (constructor function)
function CriarFaixa(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}
let faixa3 = [
    new CriarFaixa('c',10,112),
    new CriarFaixa('d',66,657) 
];

console.log(faixas)
console.log(faixa2)
console.log(faixa3)
