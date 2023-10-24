
/*

Rede de lojas de automóveis (CarStore)

Enviar um e-mail, todas as segundas-feiras, para os clientes que visitaram as lojas no último mês, 
informando-os sobre os novos veículos e os mais vendidos, bem como as condições para aquisição (sejam criativos).

- Requerir a função no arquivo "envia-email.js", que fará o envio "fake".
- Criar uma lista (array) contendo emails dos clientes e uma flag com a decisão sobre receber ou não comunicações.
1. Criar uma função para verificar o dia da semana atual, que será levado em conta para o disparo dos emails.
2. Criar uma função para montar o corpo do e-mail a ser enviado.
3. Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua decisão sobre receber comunicações de marketing.
4. Tratar o retorno de erro ou sucesso da função "enviarEmail", de maneira a exibir uma mensagem amigável ao usuário no console.
*/
//

const montarCorpoEmail = require("./corpo-email");
const enviarEmail = require("./envia-email");
const listaClientes = require("./clientes");


function ehSegundaFeira() {
    return new Date().getDay() === 1
}
ehSegundaFeira();


function enviaNewsletter (clientes) {
    for (const cliente of clientes) {
        if (cliente.flag === "s") {
            const resposta = enviarEmail (cliente.email, "Newsletter CarStore", montarCorpoEmail(cliente.nome));
            console.log(resposta.status, resposta.message);
        }
    }
}

enviaNewsletter(listaClientes)