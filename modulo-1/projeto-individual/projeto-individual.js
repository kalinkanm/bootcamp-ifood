
/*

Rede de lojas de automóveis (CarStore)

Enviar um e-mail, todas as segundas-feiras, para os clientes que visitaram as lojas no último mês, 
ok informando-os sobre os novos veículos e os mais vendidos, bem como as condições para aquisição (sejam criativos).

-ok Requerir a função no arquivo "envia-email.js", que fará o envio "fake".
-ok Criar uma lista (array) contendo emails dos clientes e uma flag com a decisão sobre receber ou não comunicações.
1.ok Criar uma função para verificar o dia da semana atual, que será levado em conta para o disparo dos emails.
2.ok Criar uma função para montar o corpo do e-mail a ser enviado.
3.ok Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua decisão sobre receber comunicações de marketing.
4.ok Tratar o retorno de erro ou sucesso da função "enviarEmail", de maneira a exibir uma mensagem amigável ao usuário no console.
*/
//

const montarCorpoEmail = require("./corpo-email");
const enviarEmail = require("./envia-email");
const listaClientes = require("./clientes");


function ehSegundaFeira() {
    return true
    return new Date().getDay() === 1;
}

function tratarRetorno (resposta, nome) {
    if (resposta.status === "Error") {
        console.error(`Falha no envio do e-mail para ${nome}: ${resposta.message}`)
    }
resposta.message

}

function enviaNewsletter(clientes) {
    if (ehSegundaFeira()) {
        for (const cliente of clientes) {
            if (cliente.flag === "s") {
                const resposta = enviarEmail(cliente.email, "Newsletter CarStore", montarCorpoEmail(cliente.nome));
                tratarRetorno(resposta, cliente.nome);
            }
        }
    }
}

enviaNewsletter(listaClientes)