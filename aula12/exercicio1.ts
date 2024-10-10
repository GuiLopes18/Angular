class Livro {
    constructor(public nome: string) {}
}

class Biblioteca {
    private livros: Livro[] = [];

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    consultarLivro(nome: string): Livro | null {
        return this.livros.find(l => l.nome.toLowerCase() === nome.toLowerCase()) || null;
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
biblioteca.adicionarLivro(new Livro("O Conde de Montecristo"));

// Consultar livro
const livroEncontrado = biblioteca.consultarLivro("Harry Potter");
if (livroEncontrado) {
    console.log(`Livro encontrado: ${livroEncontrado.nome}`);
}
else {
    console.log(`Livro não encontrado`)
}

// Deletar livro
biblioteca.deletarLivro("Dom Casmurro");