function buscarNovidades() {
    return [
        { modelo: "Mastodon Cabine Plus 1.3 2024", preco: 195900, cor: "preto" },
        { modelo: "Wintersun Drive 1.4 Flex 2023", preco: 104900, cor: "branco" },
        { modelo: "Radogost 1.0 Flex 4P 2023", preco: 77500, cor: "preto" }
    ];
}

function buscarMaisVendidos() {
    return [
        { modelo: "Gojira", preco: 127000 },
        { modelo: "Savatage", preco: 92000 }
    ]
}

function montarCorpoEmail(nome) {

    const novos = buscarNovidades().reduce((previous, current) => {
        const mensagem = `- ${current.modelo} por apenas ${current.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} (${current.cor})`;
        return `${previous}
        ${mensagem}`
    }, '');

    const maisVendidos = buscarMaisVendidos().reduce((previous, current) => {
        const mensagem = `- ${current.modelo} a partir de ${current.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
        return `${previous}
        ${mensagem}`
    }, '');

    const corpo = `
           Olá, ${nome}! Confira as novidades desta semana!

        Venha conhecer os novos veículos disponíveis na loja: ${novos}
           
        Os queridinhos: veja os mais vendidos! ${maisVendidos}

        Temos as melhores condições de aquisição:
        - Financiamento em até 60x
        - Bônus de até R$ 15 mil na troca pelo seu usado
           `
return corpo;

}

module.exports = montarCorpoEmail;