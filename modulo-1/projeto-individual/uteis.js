function ehSegundaFeira() {
    return new Date().getDay() === 1;
}

function fazTantosDias(dias, data) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    data.setHours(0, 0, 0, 0);

    return Math.floor(((hoje.getTime() - data.getTime()) / (1000 * 60 * 60 * 24))) <= dias;
}

function tratarRetorno (resposta, nome) {
    if (resposta.status === "Error") {
        console.error(`Falha no envio do e-mail para ${nome}: ${resposta.message}`);
    }
}

module.exports = {ehSegundaFeira, fazTantosDias, tratarRetorno};