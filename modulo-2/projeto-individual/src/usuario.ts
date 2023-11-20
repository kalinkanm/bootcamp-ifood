const fs = require("fs");

export class Usuario {
    private _nome: string
    private _email: string
    private _livrosEmprestados: Array<object>

    constructor(nome: string, email: string) {
        this._nome = nome
        this._email = email
        this._livrosEmprestados = []

    }

    adicionarUsuario() {
        const usuarios: Array<any> = JSON.parse(fs.readFileSync("./src/dados/usuarios.json", "utf-8"));

        if (Usuario.buscarUsuarioPorEmail(this._email)) {
            console.error("E-mail já cadastrado!")
            return;
        }

        usuarios.push({
            nome: this._nome,
            email: this._email
        })
        fs.writeFileSync("./src/dados/usuarios.json", JSON.stringify(usuarios))

    }

    static buscarUsuarioPorEmail(email: string) {
        const usuarios: Array<any> = JSON.parse(fs.readFileSync("./src/dados/usuarios.json", "utf-8"));
        return usuarios.find(usuario => usuario.email === email)

    }

    static listarUsuarios() {
        const usuarios = fs.readFileSync("./src/dados/usuarios.json", "utf-8")
        console.log(JSON.parse(usuarios));
    }

    retirarLivro() {

    }

    devolverLivro() {

    }

}