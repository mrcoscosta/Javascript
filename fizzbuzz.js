// FIZZ BUZZ
// divisivel por 3 => Fizz 
// divisivel por 5 => Buzz
// divisivel por 3 e 5 => Fizz Buzz
// Nao e divisivel por 3 e 5 => Entrada
//Não e um Numero =>'Não e um numero'
const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(Entrada){
    if (typeof Entrada != 'number')
       return 'Não e um numero'
    if (Entrada % 3 === 0 && Entrada % 5 === 0)
       return 'Fizz Buzz'
    if (Entrada % 3 === 0)
       return 'Fizz'
    if (Entrada % 5 === 0)
       return 'Bazz'

    return Entrada;
}
