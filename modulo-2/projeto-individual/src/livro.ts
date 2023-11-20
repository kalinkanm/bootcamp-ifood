import { Usuario } from "./usuario";

const fs = require("fs");

export class Livro {
    private _titulo: string
    private _autor: string
    private _anoPublicacao: string
    private _genero: string
    private _reservadoPor: string | null = null;

    constructor(novoLivro: TCriarLivro) {
        this._titulo = novoLivro.titulo
        this._autor = novoLivro.autor
        this._anoPublicacao = novoLivro.anoPublicacao
        this._genero = novoLivro.genero
    }

    static buscarLivros(): Array<TLivro> {
        return JSON.parse(fs.readFileSync("./src/dados/livros.json", "utf-8"));
    }


    adicionarLivro(): void {
        const livros = Livro.buscarLivros();

        if (Livro.buscarLivroPorTitulo(this._titulo)) {
            console.error("Livro já cadastrado")
            return;
        }

        livros.push({
            titulo: this._titulo,
            autor: this._autor,
            anoPublicacao: this._anoPublicacao,
            genero: this._genero,
            reservadoPor: this._reservadoPor,
        })
        fs.writeFileSync("./src/dados/livros.json", JSON.stringify(livros))
    }

    static buscarLivroPorTitulo(titulo: string): TLivro | undefined {
        const livros = Livro.buscarLivros();
        return livros.find(livro => livro.titulo === titulo)
    }

    static listarLivroPorAutor(autor: string): void {
        const livros: Array<any> = Livro.buscarLivros();
        return console.log(livros.filter(livro => livro.autor === autor));
    }

    static listarLivros(): void {
        const livros: Array<any> = Livro.buscarLivros();
        return console.log(livros)
    }

    static removerLivro(titulo: string): void {
        const livros = Livro.buscarLivros().filter(livro => livro.titulo !== titulo);
        fs.writeFileSync("./src/dados/livros.json", JSON.stringify(livros))
    }

    static reservarLivro(titulo: string, emailDoUsuario: string): void {
        const livros = Livro.buscarLivros();
        const index = livros.findIndex(livro => livro.titulo === titulo)

        if (index < 0) {
            return console.error("Livro não encontrado!")
        } else if (livros[index].reservadoPor) {
            return console.error("Livro já reservado!")
        } else if (!Usuario.buscarUsuarioPorEmail(emailDoUsuario)) {
            return console.error("Usuário não cadastrado!")
        }

        livros[index].reservadoPor = emailDoUsuario;
        fs.writeFileSync("./src/dados/livros.json", JSON.stringify(livros))
    }

    static devolverLivro(titulo: string): void {
        const livros = Livro.buscarLivros();
        const index = livros.findIndex(livro => livro.titulo === titulo)
        
        if (index < 0) {
            return console.error("Livro não encontrado!")
        }

        livros[index].reservadoPor = null;
        fs.writeFileSync("./src/dados/livros.json", JSON.stringify(livros))
    }
}