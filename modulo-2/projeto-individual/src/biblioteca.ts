import { Livro } from "./livro";
import { Autor } from "./autor";
import { Usuario } from "./usuario";

const fs = require("fs");
const prompt = require("prompt-sync")();

export class Biblioteca {
    menu() {
        // const opcao = prompt(`
        //     1 - Adicionar autores
        //     2 - Ver autores
        //     3 - Adicionar livros
        //     4 - Remover livros
        //     5 - Buscar livro por autor
        //     6 - Ver catálogo
        //     7 - Adicionar usuário
        //     8 - Remover usuário
        //     9 - Ver usuários 
        //     10 - Listar livros emprestados
        //     11 - Retirar livro
        //     12 - Devolver livro
        //     `)
        const opcao = prompt("Escolha uma opção: ")
        switch (opcao) {
            case "1":
                this.adicionarAutor();
                break;
            case "2":
                this.listarAutores();
                break;
            case "3":
                this.adicionarLivro();
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
            case "9":
                this.listarUsuarios();
                break;

        }

        // 1 Adicionar autores -ok
        // 2 Ver autores -ok
        // 3 Adicionar livros -ok
        // 4 Remover livros (alterar status)
        // 5 Buscar livro por autor -ok
        // 6 Ver catálogo -ok
        // 7 Adicionar usuário -ok
        // 8 Remover usuário (alterar status)
        // 9 Ver usuários -ok
        // 10 Listar livros emprestados
        // 11 Retirar livro
        // 12 Devolver livro

    }

    adicionarAutor() {
        const nome = prompt("Digite o nome do autor: ")
        const dataNascimento = new Date(prompt("Digite a data de nascimento do autor: "))
        const nacionalidade = prompt("Digite a nacionalidade do autor: ")

        const novoAutor = new Autor(nome, dataNascimento, nacionalidade);

        novoAutor.adicionarAutor()
        this.menu()
    }

    listarAutores() {
        Autor.listarAutores()
        this.menu()
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

        const novoLivro = new Livro(titulo, autor, anoPublicacao, genero);

        novoLivro.adicionarLivro()
        this.menu()
    }

    listarLivrosPorAutor() {
        const autor = prompt("Digite o autor do livro: ");
        Livro.listarLivroPorAutor(autor)
        this.menu()
    }

    listarLivros() {
        Livro.listarLivros()
        this.menu()
    }

    adicionarUsuario() {
        const nome = prompt("Digite o nome do usuário: ")
        const email = prompt("Digite o e-mail do usuário: ")

        const novoUsuario = new Usuario(nome, email);

        novoUsuario.adicionarUsuario()
        this.menu()
    }

    listarUsuarios() {
        Usuario.listarUsuarios()
        this.menu()
    }
}

// // const autor1 = new Autor("Bram Stoker", new Date("1847/11/08"), "irlandês")
// // const livro1 = new Livro("Dracula", autor1, "1897", "terror");
// // const usuario1 = new Usuario("Kalinka", "kali@kali.com")