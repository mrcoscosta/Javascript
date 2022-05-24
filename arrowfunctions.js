
/// DIFERENÇA ENTRE FUNCTION E ARROW FUNCTION
// function NOMEADA
function digaOla(){
    alert('Ola gente')
}
digaOla()
// function ANONIMA
setTimeout(function(){
    console.log('Ola gente 2')
},1000)

// ARROW FUNCTIONS
// se nao precisar ser nomeada e tambem precisar o this , posso usar arrow function porque a sintax dela e menor
const DigaOla3 = () => {
    console.log('Ola gente sou uma Arrow function')
}
DigaOla3()

// this. 

class Test  {
    constructor() {
        this.name = 'marcos'
    }

    digaOlaFn() { // nao retorna (a funcao tem seu proprio this tem seu proprio escopo)o ths name porque funcao e de escopo local
        setTimeout(function() { 
            console.log(`HELLO ${this.name}`)
            
        }, 200);
    }
    digaOlaArrowFn(){ // chamada de arrow function
        setTimeout(() => console.log(`Ola ${this.name}`) , 200);// retorna pois arrow function e de escopo global
    }

}
const newTest =  new Test()
newTest.digaOlaArrowFn()



/*const pessoa = [
    {nome:'marcos', idade: 22},
    {nome:'adrinao', idade: 34}
]
console.log(pessoa.find(pessoas =>  pessoas.nome === 'adrinao'));

*/

 function redirencionar(){
    window.open("https://www.instagram.com/accounts/login/")
 }
 function trocar(elemento){
     console.log(elemento.value)
 }