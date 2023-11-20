import { Autor } from "./autor"
import { Usuario } from "./usuario"
const fs = require("fs");

export class Livro {
    private _titulo: string
    private _autor: Autor
    private _anoPublicacao: string
    private _genero: string
    // private _reservadoPor: Usuario

    constructor(titulo: string, autor: Autor, anoPublicacao: string, genero: string) {
        this._titulo = titulo
        this._autor = autor
        this._anoPublicacao = anoPublicacao
        this._genero = genero
    }


    adicionarLivro() {
        const livros: Array<any> = JSON.parse(fs.readFileSync("./src/dados/livros.json", "utf-8"));

        if (Livro.buscarLivroPorTitulo(this._titulo)) {
            console.error("Livro já cadastrado")
            return;
        }

        livros.push({
            titulo: this._titulo,
            autor: this._autor,
            anoPublicacao: this._anoPublicacao,
            genero: this._genero
        })
        fs.writeFileSync("./src/dados/livros.json", JSON.stringify(livros))

    }

    static buscarLivroPorTitulo(titulo: string) {
        const livros: Array<any> = JSON.parse(fs.readFileSync("./src/dados/livros.json", "utf-8"));
        return livros.find(livro => livro.titulo === titulo)
    }

    static listarLivroPorAutor(autor: string) {
        const livros: Array<any> = JSON.parse(fs.readFileSync("./src/dados/livros.json", "utf-8"));
        return console.log(livros.filter(livro => livro.autor === autor))
    }

    static listarLivros() {
        const livros: Array<any> = JSON.parse(fs.readFileSync("./src/dados/livros.json", "utf-8"));
        return console.log(livros)
    }
}

