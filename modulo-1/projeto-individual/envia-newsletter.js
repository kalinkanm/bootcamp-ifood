const montarCorpoEmail = require("./corpo-email");
const enviarEmail = require("./envia-email");
const listaClientes = require("./clientes");
const { ehSegundaFeira, fazTantosDias, tratarRetorno } = require("./uteis");


function enviaNewsletter(clientes) {
    if (ehSegundaFeira()) {
        for (const cliente of clientes) {
            if (cliente.recebeNewsletter && fazTantosDias(30, new Date(cliente.ultimaVisita))) {
                const resposta = enviarEmail(cliente.email, "Newsletter CarStore", montarCorpoEmail(cliente.nome));
                tratarRetorno(resposta, cliente.nome);
            }
        }
    } else {
        console.log("Hoje não é segunda-feira.");
    }
}

enviaNewsletter(listaClientes);