
function calculadora (){
    const operacao = Number(prompt('Escolha a opercao:\n 1- soma (+)\n 2 - subtracao (-) \n 3 - multiplicacao (*) \n 4- divisao (/) \n 5 - Resto da Divisão (%) \n 6- potenciacao (**) '))
if (operacao  >= 7){
   alert("Numero invalido")
    calculadora()
}else{
    let N1 = Number(prompt('Digite o primeiro Numero:'));
    let N2 = Number(prompt('Digite o Segundo Numero:'));
    let resultado;

  if(operacao == 1){
    soma()
  }else if(operacao == 2){
    subtracao()
  }else if(operacao == 3){
    multiplicacao()
  }else if(operacao == 4){
    divisao() 
  } else if(operacao == 5){
    RestoDaDivisao()  
  }else if(operacao == 6){
    pontenciacao()
  }

 function soma(){
    resultado = N1 + N2
    alert(`${N1} + ${N2} = ${resultado}`)
 }
 function subtracao(){
    resultado = N1 - N2
    alert(`${N1} - ${N2} = ${resultado}`)
 }
 function multiplicacao(){
    resultado = N1 * N2
    alert(`${N1} * ${N2} = ${resultado}`)
 }
 function divisao(){
    resultado = N1 / N2
    alert(`${N1} / ${N2} = ${resultado}`)
    
   }
   function RestoDaDivisao(){
    resultado = N1 % N2
    alert(` O Resto da divisão de ${N1} por ${N2} = ${resultado}`)
    
   }
   function pontenciacao(){
    resultado = N1 ** N2
    alert(`${N1} elevado ${N2} = ${resultado}`)
    
   }
   novaOpercao()
  }

}
calculadora()
function novaOpercao(){
    let opc = prompt('Fazer opereção Novamente:\n 1 - Sim \n 2 - Não')
    if (opc == 1){
        calculadora()
    }else{
        alert('Ate Mas!')
    }
}


