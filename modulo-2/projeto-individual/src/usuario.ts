import { Livro } from "./livro";

const fs = require("fs");

export class Usuario {
    private _nome: string
    private _email: string
    private _dataNascimento: string

    constructor(novoUsuario: TCriarUsuario) {
        this._nome = novoUsuario.nome
        this._email = novoUsuario.email
        this._dataNascimento = novoUsuario.dataNascimento
    }

    static buscarUsuarios(): Array<TUsuario> {
        return JSON.parse(fs.readFileSync("./src/dados/usuarios.json", "utf-8"));
    }

    adicionarUsuario(): void {
        const usuarios = Usuario.buscarUsuarios();

        if (Usuario.buscarUsuarioPorEmail(this._email)) {
            console.error("E-mail já cadastrado!")
            return;
        }

        usuarios.push({
            nome: this._nome,
            email: this._email,
            dataNascimento: this._dataNascimento
        })
        fs.writeFileSync("./src/dados/usuarios.json", JSON.stringify(usuarios))

    }

    static buscarUsuarioPorEmail(email: string): TUsuario | undefined {
        const usuarios = Usuario.buscarUsuarios();
        return usuarios.find(usuario => usuario.email === email)
    }

    static listarUsuarios(): void {
        const usuarios = fs.readFileSync("./src/dados/usuarios.json", "utf-8")
        console.log(JSON.parse(usuarios));
    }

    static removerUsuario(email: string): void {
        const usuarios = Usuario.buscarUsuarios().filter(usuario => usuario.email !== email);
        fs.writeFileSync("./src/dados/usuarios.json", JSON.stringify(usuarios))
    }

    static verReservasDoUsuario(email: string): void {
        const livros = Livro.buscarLivros().filter(livro => livro.reservadoPor === email);
        console.log(livros);
    }

}