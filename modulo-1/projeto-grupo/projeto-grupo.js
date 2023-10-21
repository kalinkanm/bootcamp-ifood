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
// const tarefas = [{ id: 1, descricao: 'a' }, { id: 2, descricao: 'b' }];
let indice = 0;

function gerenciadorDeTarefas() {
    console.log(opcoes);

    const acao = prompt("O que você deseja fazer? ");

    switch (acao) {
        case "1":
            adicionarTarefas();
            break;
        case "2":
            editarTarefa();
            break;
        case "3":
            removerTarefa();
            break;
        case "4":
            listarTarefas();
            break;
        case "5":
            procurarTarefa();
            break;
        case "6":
            break;
        default:
            console.log("Opção inválida!");
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
    const tarefaParaEditar = prompt(`Qual o id da tarefa que você quer editar?`);
    const novaDescricao = prompt(`Digite a nova descrição: `);

    for (let tarefa of tarefas) {
        if (tarefa.id === parseInt(tarefaParaEditar)) {
            tarefa.descricao = novaDescricao;
        } else {
            console.log("id inválido");
            break;
        }
    }
    console.log("Item editado com sucesso!");

    prompt(`ENTER para voltar ao menu principal`);
    gerenciadorDeTarefas();
}

function removerTarefa() {
    const idParaRemover = prompt(`Qual o id da tarefa que você quer remover?`);

    for (let tarefa of tarefas) {
        if (tarefa.id === parseInt(idParaRemover)) {
            let index = tarefas.indexOf(tarefa)
            tarefas.splice(index, 1)
        } else {
            console.log("id inválido");
            break;
        }
    }
    console.log("Item removido com sucesso!");

    prompt(`ENTER para voltar ao menu principal`);
    gerenciadorDeTarefas();
}

function listarTarefas() {
    console.log(`LISTA DE TAREFAS`);
    console.log(tarefas);

    prompt(`ENTER para voltar ao menu principal`);
    gerenciadorDeTarefas();
}


function procurarTarefa() {
    let idParaProcurar = prompt(`Qual a tarefa que você quer procurar?`);

    if (!isNaN(parseInt(idParaProcurar))) {
        for (let tarefa of tarefas) {
            if (tarefa.id === parseInt(idParaProcurar)) {
                console.log(tarefa);
            }
        }

    } else {
        for (let tarefa of tarefas) {
            if (tarefa.descricao === idParaProcurar.toString()) {
                console.log(tarefa);
            } else {
                console.log("Tarefa não encontrada!");
                break;
            }
        }
    }

    prompt(`ENTER para voltar ao menu principal`);
    gerenciadorDeTarefas();
}

gerenciadorDeTarefas();