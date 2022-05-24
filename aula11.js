// criar funcao pra exibir numeros primos e compostos

// 1 primos
// 2 compostos
exibirNumerosPrimos(9)
function exibirNumerosPrimos(limite){
      for (let i = 1;i <= limite;i++){
             
     if(numeroPrimo (i)) console.log(i)
    }
}
function numeroPrimo (i){

        for (let divisor = 2; divisor < i;divisor++) {
            if (i % divisor === 0){
                  return false;
        
            }
        }
      return true;
}