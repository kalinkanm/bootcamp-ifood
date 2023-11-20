const fs = require("fs");

export class Autor {
    private _nome: string
    private _dataNascimento: string
    private _nacionalidade: string

    constructor(novoAutor: TCriarAutor) {
        this._nome = novoAutor.nome
        this._dataNascimento = novoAutor.dataNascimento
        this._nacionalidade = novoAutor.nacionalidade
    }

    static buscarAutor(): Array<TAutor> {
        return JSON.parse(fs.readFileSync("./src/dados/autores.json", "utf-8"))
    }

    adicionarAutor(): void {
        const autores = Autor.buscarAutor();

        if (Autor.buscarAutorPorNome(this._nome)) {
            console.error("Autor já cadastrado")
            return;
        }

        autores.push({
            nome: this._nome,
            dataNascimento: this._dataNascimento,
            nacionalidade: this._nacionalidade
        })
        fs.writeFileSync("./src/dados/autores.json", JSON.stringify(autores))
    }

    static buscarAutorPorNome(nome: string): TAutor | undefined {
        const autores = Autor.buscarAutor();
        return autores.find(autor => autor.nome === nome)

    }

    static listarAutores(): void {
        const autores = fs.readFileSync("./src/dados/autores.json", "utf-8")
        console.log(JSON.parse(autores));
    }
}