
function montarCorpoEmail(nome) {
    const novos = [
        { modelo: "Nova Mastodon Cabine Plus 1.3 2024", preco: "195.900,00", cor: "preto" },
        { modelo: "Wintersun Drive 1.4 Flex 2023", preco: "104.900,00", cor: "branco" }
    ];

    const maisVendidos = ["Gojira, o SUV superesportivo, por apenas R$ 127.000,00",
        "Savatage, motor Turbo de verdade, por apenas R$ 92.000,00"];

    console.log(`       Olá, ${nome}! Confira as novidades desta semana!`);

    // novos veículos 
    console.log(`
    Venha conhecer os novos veículos disponíveis na loja:`);
    for (const carro of novos) {
        console.log(`- ${carro.modelo} por apenas R$ ${carro.preco} (${carro.cor})`);
    }

    // mais vendidos 
    console.log(`
    Os queridinhos: veja os mais vendidos!
- ${maisVendidos[0]}
- ${maisVendidos[1]}`);

    // condições para aquisição
    console.log(`
    Temos as melhores condições de aquisição:
- Financiamento em até 60x
- Bônus de até R$ 5 mil na troca pelo seu usado`);

    console.log(`
CarStore: a sua escolha em automóveis. 
Av. do Colono, 666. (54) 6666 6666`);

}
// montarCorpoEmail("Kalinka");

module.exports = montarCorpoEmail