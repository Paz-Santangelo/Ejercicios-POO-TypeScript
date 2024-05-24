"use strict";
class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = [];
    }
    agregarPagina(pagina) {
        this.paginas.push(pagina);
    }
    get Pagina() {
        return this.paginas;
    }
    get Titulo() {
        return this.titulo;
    }
    set Titulo(nuevoTitulo) {
        this.titulo = nuevoTitulo;
    }
    get Autor() {
        return this.autor;
    }
    set Autor(nuevoAutor) {
        this.autor = nuevoAutor;
    }
}
class Pagina {
    constructor(capitulo) {
        this.capitulo = capitulo;
    }
    get Capitulo() {
        return this.capitulo;
    }
    set Capitulo(nuevoCapitulo) {
        this.capitulo = nuevoCapitulo;
    }
}
const libro = new Libro("Historias de Divan", "Gabriel Rolon");
libro.agregarPagina(new Pagina("El comienzo de una nueva etapa..."));
console.log(libro);
