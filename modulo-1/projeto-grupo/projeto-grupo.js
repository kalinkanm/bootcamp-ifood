/*
TODO LIST
Funcionalidades:
- Adicionar uma tarefa
- Editar uma tarefa salva
- Remover uma tarefa salva
- Listar todas as tarefas salvas
- Obter uma tarefa, através de um parâmetro (id)
*/

const opcoes = `Opções: 
1 Adicionar uma tarefa
2 Editar uma tarefa
3 Remover uma tarefa
4 Ver todas as tarefas
5 Ver uma tarefa específica
6 Sair`;

const prompt = require("prompt-sync")();

const tarefas = [];
let indice = 0;

function gerenciadorDeTarefas() {
    console.log(opcoes);

    const acao = prompt("O que você deseja fazer? ");

    switch (acao) {
        case "1":
            adicionarTarefas();
            break;
        case "2":
            console.log("2");
            break;
        case "3":
            console.log('3');
            break;
        case "4":
            listarTarefas();
            break;
        case "5":
            console.log("5");
            break;
        case "6":
            break;
        default:
            console.log("Não entendi.");
            gerenciadorDeTarefas();
            break;
    }




}

function adicionarTarefas() {
    const novaTarefa = prompt("Que tarefa você quer adicionar? ");
    const tarefa = {
        id: ++indice,
        descricao: novaTarefa,
    }
    tarefas.push(tarefa);
    console.log(`Tarefa ${tarefa.descricao} com id ${tarefa.id} foi adicionada.`);
    prompt(`ENTER para voltar ao menu principal`);

    gerenciadorDeTarefas();
}

function listarTarefas() {
    console.log(`LISTA DE TAREFAS`);
    console.log(tarefas);
    prompt(`ENTER para voltar ao menu principal`);

    gerenciadorDeTarefas();
}


gerenciadorDeTarefas();