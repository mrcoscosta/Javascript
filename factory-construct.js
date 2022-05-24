// factory functions (funcao de fabrica)

//camelCase => umDoisTres
function dadosPessoa(nome,idade,altura,sobreNome,peso){
    return {
         nome,
         idade,
         altura,
         sobreNome,
         peso
    }  
}
const pessoa = dadosPessoa('adrinao',33, .80,'viera', 80)
console.log(pessoa)
//adrinao',33,1.80,'viera',80
const pessoa2 = dadosPessoa('erica', 19, 1.60,'serra',53)
console.log(pessoa2)  
//erica  19 1.60 'serra' 53
// construct functions
//Pascal Case => UmDoisTres
function Pessoa1(nome,idade,altura,sobreNome,peso){
    this.nome = nome,
    this.idade = idade,
    this.altura = altura,
    this.sobreNome = sobreNome,
    this.peso = peso
} 
const pessoa1 = new Pessoa1('marcos',33,1.80,'costa',65)
console.log(pessoa1)
//marcos 33 1.80 costa 65

//or(||)
 function User(name, age, hawkwer){
     this.name = name || 'Marcão',
     this.age = age || 22,
     this.hawkwer - hawkwer || true 
 } 
 const user1 = new User()
console.log(user1.name, user1.age, user1.hawkwer)
// Marcão 22 

const user2 = new User(lindo, 39, false)
console.log(user2)
//lindo 39 false

