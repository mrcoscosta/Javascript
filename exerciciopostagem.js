// objeto Postagem de blogs (exe)

let postagem = {
    titulo: 'Aula Js',
    mensagem: 'progrando em java script',
    autor: 'Marcos dev',
    visualizacoes: 50000.00,
    comentarios : [
        {autor: 'aula' ,mensagem : 'progrma'},
        {autor: 'aula ',mensagem: 'progrma'}
    ],
    estaAoVivo: true

}
console.log(postagem)

// Exercicio constructor function
// criar objeto postagem
function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    visualizacoes = 0, 
    comentarios = 50,
    estaAoVivo = false
    
};
const postagem1 = new Postagem('ama','pelo','marcos')
console.log(postagem1)