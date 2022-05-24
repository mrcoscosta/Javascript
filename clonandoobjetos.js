// Natureza Dinãmica de objestos
const mouse = {
    cor: 'azul',
    marca: 'dazz'
}
mouse.velocidade = 5000
mouse.trocarDpi = function(){
    console.log('mudando dp1')
}
delete mouse.cor
delete mouse.marca
console.log(mouse)

// possivel add e tirar propriedades de dentro do obejto


// CLONANDO OBJETOS
// forma 1 
const celular = {
    marcaCelular: 'Samsung',
    tamanhoTela: {
        vertica: 155,
        horizontal: 45
    },
    ligar: () => {
        console.log('ligando')
    }
}

const novoObjeto = Object.assign({
    bateria: 500 // podendo adicionar propriedades
},celular)
console.log(novoObjeto)
// forma 2
const objeto2 = {...celular}
console.log(objeto2)