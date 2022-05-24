// CLASSE ORIENTADA A OBJETO POO
class Animal {
    constructor (nome,idade){
        this.nome = nome,
        this.idade = idade
        
    }
    speak(){
        console.log(`${this.nome} Fez barulho`)
    }
}
class Bob extends Animal{
    constructor(nome,idade){
        super(nome,idade)
        
    }
    speak(){
    console.log(`${this.nome} berak`)
    }
}
    

const animal = new Animal('dog',2,)
console.log(animal)
animal.speak()
const bob = new Bob('urso',4)
console.log(bob)
bob.speak()