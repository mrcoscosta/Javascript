// Exercicio nota escolar
// Obtr media apartir e um array escolar
const array = [70, 70, 80]

console.log(mediaDoAluno(array))

function mediaDoAluno(notas){
    const media = CalcularMedia(notas)

    if (media < 59) return 'F'
    if (media < 69) return 'D'
    if (media < 79) return 'C'
    if (media < 89) return 'D'
    return "A"

}
function CalcularMedia(array){
let soma = 0
    for (let valor of array) {
        soma += valor;
    }
    return soma/(array.length);
}
mediaDoAluno()