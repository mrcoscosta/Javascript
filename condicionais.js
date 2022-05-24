// if else
const soma = 1 + 1;
if (soma === 2){
    console.log('soma e igual 2')
}else if(soma === 3){
    console.log('e igual a tres')
}
else{
    console.log('soma nao e 2')
}

// ternario

const sum = 1 + 0;
sum == 1 ? 'sum e igual a um' : 'nao e'

function parimpar(n){
    n%2==0 ?  "par" : "impar"
}

console.log(parimpar(713))

//swith case
const car = 'mercedes'
switch (car) {
  case mercedes:
    console.log('mercedes e lindo')
     break;
  case ferrai:
      console.log('ferrari is very red')
      break;
  case celta:
      console.log("carro popular")
      break;
    default:
        break;
}