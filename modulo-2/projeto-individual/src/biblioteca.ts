import { Livro } from "./livro";
import { Autor } from "./autor";
import { Usuario } from "./usuario";

const prompt = require("prompt-sync")();

export class Biblioteca {
    menu() {
        console.log(`
        0 - Sair
        1 - Adicionar autores
        2 - Ver autores
        3 - Adicionar livros
        4 - Remover livros
        5 - Buscar livro por autor
        6 - Ver catálogo
        7 - Adicionar usuário
        8 - Remover usuário
        9 - Ver usuários 
        10 - Listar livros emprestados
        11 - Retirar livro
        12 - Devolver livro
        `)

        const opcao = prompt("Escolha uma opção: ")
        let sair = false;
        switch (opcao) {
            case "0":
                sair = true;
                break;
            case "1":
                this.adicionarAutor();
                break;
            case "2":
                this.listarAutores();
                break;
            case "3":
                this.adicionarLivro();
                break;
            case "4":
                this.removerLivro();
                break;
            case "5":
                this.listarLivrosPorAutor();
                break;
            case "6":
                this.listarLivros();
                break;
            case "7":
                this.adicionarUsuario();
                break;
            case "8":
                this.removerUsuario();
                break;
            case "9":
                this.listarUsuarios();
                break;
            case "10":
                this.verReservasDoUsuario();
                break;
            case "11":
                this.reservarLivro();
                break;
            case "12":
                this.devolverLivro();
                break;
        }

        if (!sair) {
            prompt("Pressione ENTER para continuar")

            this.menu()
        };

    }

    adicionarAutor() {
        const nome = prompt("Digite o nome do autor: ")
        const dataNascimento = prompt("Digite a data de nascimento do autor: ")
        const nacionalidade = prompt("Digite a nacionalidade do autor: ")

        const novoAutor = new Autor({ nome, dataNascimento, nacionalidade });

        novoAutor.adicionarAutor()

    }

    listarAutores() {
        Autor.listarAutores()

    }

    reservarLivro() {
        const titulo = prompt("Digite o título do livro: ");
        const email = prompt("Digite o seu email cadastrado: ");

        Livro.reservarLivro(titulo, email);
    }

    devolverLivro() {
        const titulo = prompt("Digite o título do livro: ");
        Livro.devolverLivro(titulo);
    }

    adicionarLivro() {
        const autor = prompt("Digite o autor do livro: ");
        if (!Autor.buscarAutorPorNome(autor)) {
            return console.error("Autor não encontrado! Cadastre o autor primeiro!");
        }
        const titulo = prompt("Digite o título do livro: ");
        if (Livro.buscarLivroPorTitulo(titulo)) {
            return console.error("Livro já cadastrado!");
        }
        const anoPublicacao = prompt("Digite o ano de publicação: ");
        const genero = prompt("Digite o gênero literário do livro: ");

        const novoLivro = new Livro({ titulo, autor, anoPublicacao, genero });

        novoLivro.adicionarLivro()

    }

    removerLivro() {
        const titulo = prompt("Digite o título do livro: ");
        Livro.removerLivro(titulo);
    }

    removerUsuario() {
        const email = prompt("Digite o email do usuario: ");
        Usuario.removerUsuario(email)
    }

    listarLivrosPorAutor() {
        const autor = prompt("Digite o autor do livro: ");
        Livro.listarLivroPorAutor(autor)

    }

    listarLivros() {
        Livro.listarLivros()

    }

    adicionarUsuario() {
        const nome = prompt("Digite o nome do usuário: ")
        const email = prompt("Digite o e-mail do usuário: ")
        const dataNascimento = prompt("Digite a data de nascimento do usuário: ")

        const novoUsuario = new Usuario({ nome, email, dataNascimento });

        novoUsuario.adicionarUsuario()

    }

    listarUsuarios() {
        Usuario.listarUsuarios()

    }

    verReservasDoUsuario() {
        const email = prompt("Digite o e-mail do usuário: ");
        Usuario.verReservasDoUsuario(email);
    }
}
