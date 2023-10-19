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
            editarTarefa(); // EM ANDAMENTO
            break;
        case "3":
            console.log('Falta função 3 Remover uma tarefa'); // EM ANDAMENTO
            break;
        case "4":
            listarTarefas();
            break;
        case "5":
            console.log("Falta função 5 Ver uma tarefa específica"); // EM ANDAMENTO
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

function editarTarefa() {
    console.log(tarefas);
    const tarefaParaEditar = prompt(`Qual o id da tarefa que você quer editar?`);
    const novaDescricao = prompt(`Digite a nova descrição: `);

    // for (let i = 0; i < tarefas.length; i++) {
    //     if (tarefas[i].id === tarefaParaEditar) {
    //         tarefas[i].descricao = novaDescricao;
    //     }
        
    // }

    for (tarefa of tarefas) {
        if (tarefa.id === tarefaParaEditar) {
            tarefa.descricao = novaDescricao;
        } else {
            console.log("id inválido");
        }
    }
    console.log("Item editado com sucesso!");
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