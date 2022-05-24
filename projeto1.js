/*function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').ariaValueMax;
    ConvidadosMarcos = ['erica santos','cris','isac','paulinho','sofia','adrino']
    if (ConvidadosMarcos.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Voce pode entrar'
    
    }
    else {
        document.getElementById('PermissaoDeEntrada').innerText = "Voçe nao pode entrar"
    }
}
*/
const timer = 'codigo'
console.time(timer)
let tempoA = 10;
let tempoB = 20;

for(let i = 0;i < 1e6;i++){
    [tempoA, tempoB] = [tempoA, tempoB]
    console.timeLog(timer)
}
console.timeEnd(timer)