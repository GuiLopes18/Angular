class Livro {
    constructor(public nome: string) {}
}

class Biblioteca {
    private livros: Livro[] = [];

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    consultarLivro(nome: string): void {
        const livroEncontrado = this.livros.find(l => l.nome.toLowerCase() === nome.toLowerCase());
        if (livroEncontrado) {
            console.log(`Livro encontrado: ${livroEncontrado.nome}`);
        }
        else {
            console.log(`Livro não encontrado na biblioteca`);
        }
    }

    deletarLivro(nome: string): void {
        const livroIndex = this.livros.findIndex(l => l.nome.toLowerCase() === nome.toLowerCase());
        if (livroIndex !== -1) {
            this.livros.splice(livroIndex, 1);
        }
    }
}

const biblioteca = new Biblioteca();

// Adicionar livros
biblioteca.adicionarLivro(new Livro("Harry Potter"));
biblioteca.adicionarLivro(new Livro("Biblioteca da Meia Noite"));
biblioteca.adicionarLivro(new Livro("Crônicas de Gelo e Fogo"));
biblioteca.adicionarLivro(new Livro("Castelo de Vidro"));

// Consultar livros
biblioteca.consultarLivro("harry potter");
biblioteca.consultarLivro("Castelo de Vidro");
biblioteca.consultarLivro("diário de um banana");

// Deletar livros
biblioteca.deletarLivro("Castelo de Vidro");

// Consultar livros deletados
biblioteca.consultarLivro("Castelo de Vidro");
