// Receber uma quantidade de valores pra avaliar
//funcao exibe se cada valor e imoa ou par
function exibirTipo (limite){
    for (let i = 0;i <= limite;i++){
        if (i % 2 === 0){
            console.log(i,'PAR')
        }else{
            console.log(i,'IMPAR')
        }
    }

}
exibirTipo(5)