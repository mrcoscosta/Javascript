//COMO LER PROPOPRIEDADES DENTRO DE UM OBJETO

/*
CRIAR UM METODO PRA LER PROPRIEDADDES DE UM OBJETO
EXIBIR SOMENTE AS PROPRIEDADSES DO TIPO STRING QUE ESTAO NESSE OBJETO
*/
const filme = {
    nome: 'Velozes e foriozos',
    director: 'Marcao',
    ano: 2012,
    personagem: 'bruce'   
};
exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj) {
        if (typeof obj[prop] == 'string'){
            console.log(prop,obj[prop])
        }
    }
}