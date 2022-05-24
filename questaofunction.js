// velocidade maxima de 70
//a cada 5km acima ddo limite 1 ponto na carteira
// math.floor()
// casos pontos for maior que 12 => carteira suspensa

verificarVelocidade(50);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPonto = 5;
    if (velocidade <= velocidadeMaxima){
       console.log ('Ok')
    }
    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPonto))
        if (pontos >= 12)
            console.log('carteira suspença')
        else
            console.log(pontos,'pontos')
        
    }
}