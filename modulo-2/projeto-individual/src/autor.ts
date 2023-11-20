const fs = require("fs");

export class Autor {
    private _nome: string
    private _dataNascimento: Date
    private _nacionalidade: string

    constructor(nome: string, dataNascimento: Date, nacionalidade: string) {
        this._nome = nome
        this._dataNascimento = dataNascimento
        this._nacionalidade = nacionalidade
    }

    adicionarAutor() {
        const autores: Array<any> = JSON.parse(fs.readFileSync("./src/dados/autores.json", "utf-8"));

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

    static buscarAutorPorNome(nome: string) {
        const autores: Array<any> = JSON.parse(fs.readFileSync("./src/dados/autores.json", "utf-8"));
        return autores.find(autor => autor.nome === nome)

    }

    static listarAutores() {
        const autores = fs.readFileSync("./src/dados/autores.json", "utf-8")
        console.log(JSON.parse(autores));
    }
}