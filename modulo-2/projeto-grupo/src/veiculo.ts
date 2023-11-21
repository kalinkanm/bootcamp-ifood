const fs = require("fs");

export class Veiculo {
    private _placa: string
    private _reservadoPor: string | null = null
    private _horaAluguel: number
    private _tipoVeiculo: string
    private _modelo: string

    constructor(novoVeiculo: TVeiculo) {
        this._horaAluguel = novoVeiculo.horaAluguel
        this._placa = novoVeiculo.placa
        this._tipoVeiculo = novoVeiculo.tipoVeiculo
        this._modelo = novoVeiculo.modelo
    }

    // get placa() {
    //     return this._placa
    // }

    // get reservado() {
    //     return this._reservado
    // }

    // get horaAluguel() {
    //     return this._horaAluguel
    // }

    // get tipoVeiculo() {
    //     return this._tipoVeiculo
    // }

    // get modelo() {
    //     return this._modelo
    // }

    // set horaAluguel(horaAluguel: number) {
    //     this._horaAluguel = horaAluguel
    // }

    // set reservado(reservado: boolean) {
    //     this._reservado = reservado
    // }


    static buscarVeiculos(): Array<TVeiculo> {
        return JSON.parse(fs.readFileSync("./src/dados/veiculos.json", "utf-8"));
    }
    
    static buscarVeiculoPorPlaca(placa: string): TVeiculo | undefined {
        const veiculos = Veiculo.buscarVeiculos();
        return veiculos.find(veiculo => veiculo.placa === placa)
    }

    adicionarVeiculo(): void {
        const veiculos = Veiculo.buscarVeiculos();

        if (Veiculo.buscarVeiculoPorPlaca(this._placa)) {
            console.error("Placa já cadastrada!")
            return;
        }

        veiculos.push({
            placa: this._placa,
            tipoVeiculo: this._tipoVeiculo,
            horaAluguel: this._horaAluguel,
            modelo: this._modelo,
            reservadoPor: this._reservadoPor
        })
        fs.writeFileSync("./src/dados/veiculos.json", JSON.stringify(veiculos))
    }

    static listarVeiculos(): void {
        const veiculos: Array<any> = Veiculo.buscarVeiculos();
        return console.log(veiculos)
    }

    // static reservarVeiculo(placa: string, cpfCliente: string): void {
    //     const livros = Livro.buscarLivros();
    //     const index = livros.findIndex(livro => livro.titulo === titulo)

    //     if (index < 0) {
    //         return console.error("Livro não encontrado!")
    //     } else if (livros[index].reservadoPor) {
    //         return console.error("Livro já reservado!")
    //     } else if (!Usuario.buscarUsuarioPorEmail(emailDoUsuario)) {
    //         return console.error("Usuário não cadastrado!")
    //     }

    //     livros[index].reservadoPor = emailDoUsuario;
    //     fs.writeFileSync("./src/dados/livros.json", JSON.stringify(livros))
    // }

    // static devolverLivro(titulo: string): void {
    //     const livros = Livro.buscarLivros();
    //     const index = livros.findIndex(livro => livro.titulo === titulo)
        
    //     if (index < 0) {
    //         return console.error("Livro não encontrado!")
    //     }

    //     livros[index].reservadoPor = null;
    //     fs.writeFileSync("./src/dados/livros.json", JSON.stringify(livros))
    // }

}