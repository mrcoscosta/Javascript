// laço for in => pra trabalhsr com objetos
const pessoa = {
    nome: 'marcos',
    idade: 22
};
for (const chave in pessoa) {
    console.log(chave,pessoa.nome)   
 }
 
 const cores = ['amarelo',' azul', 'vermelho']

 // laço for of
 for (let cor of cores){
     console.log(cores)
 }
 // forEach
 cores.forEach(function(cor,index){
     console.log(cor,index)
 })
