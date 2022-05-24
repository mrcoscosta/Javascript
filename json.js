// JSON => como agnte manda um arquivo para um seervidor
const todos = [
    {
        id:1,
        descricao:'estudando programação',
        completo: false
    },
    {
        id:2,
        descricao: 'ler',
        completo:true
    },
    {
        id:3,
        descricao:'treinar',
        complete: 'por hoje'
    },
]
// agnte sempre vai dar json.stringify para manda pra um servidor
const todosJSON = JSON.stringify(todos)
// quando agente receber em json
const todosList = JSON.parse(todosJSON)