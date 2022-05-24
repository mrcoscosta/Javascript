// criar uma funcao que exibe a quantidsde de asteriscos
//que aquela lnha possuui
exibirAsteriscos()
function exibirAsteriscos(linhas){
    let asteriscos = ' '
    for (let i = 1;i <= linhas;i++){
        asteriscos += '*'
    }
console.log(asteriscos)
}
    /*
    for (let linha = 1; linha <= linhas;linhai++){
        asteriscos = '*'
        for (let i = 0;i <= linhas;i++){
            asteriscos += '*'
        }
        console.log(asteriscos)
    }
    console.log()
}
*/