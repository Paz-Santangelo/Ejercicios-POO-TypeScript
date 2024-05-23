class Libro {
    private titulo: string;
    private autor: string;
    private paginas: Pagina[];

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = [];
    }

    agregarPagina(pagina: Pagina): void {
        this.paginas.push(pagina);
    }

    get Pagina(): Pagina[] {
        return this.paginas;
    }

    get Titulo(): string {
        return this.titulo;
    }

    set Titulo(nuevoTitulo: string) {
        this.titulo = nuevoTitulo;
    }

    get Autor(): string {
        return this.autor;
    }

    set Autor(nuevoAutor: string) {
        this.autor = nuevoAutor;
    }
}

class Pagina {
    private capitulo: string;

    constructor(capitulo: string) {
        this.capitulo = capitulo;
    }

    get Capitulo(): string {
        return this.capitulo;
    }

    set Capitulo(nuevoCapitulo: string) {
        this.capitulo = nuevoCapitulo;
    }
}

const libro = new Libro("Historias de Divan", "Gabriel Rolon");
libro.agregarPagina(new Pagina("El comienzo de una nueva etapa..."));

console.log(libro);
