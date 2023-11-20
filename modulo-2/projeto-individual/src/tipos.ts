type TLivro = {
    titulo: string;
    autor: string;
    anoPublicacao: string;
    genero: string;
    reservadoPor: string | null;
}
type TUsuario = {
    nome: string;
    email: string;
    dataNascimento: string;
}
type TAutor = {
    nome: string
    dataNascimento: string
    nacionalidade: string
}

type TCriarLivro = {
    titulo: string;
    autor: string;
    anoPublicacao: string;
    genero: string;
    reservadoPor?: string | null;
};

type TCriarUsuario = {
    nome: string;
    email: string;
    dataNascimento: string;
}
type TCriarAutor = {
    nome: string
    dataNascimento: string
    nacionalidade: string
}