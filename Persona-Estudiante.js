"use strict";
class Persona {
    constructor(nombre, apellido, anioNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.anioNacimiento = anioNacimiento;
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    get Apellido() {
        return this.apellido;
    }
    set Apellido(nuevoApellido) {
        this.apellido = nuevoApellido;
    }
    get AnioNacimiento() {
        return this.anioNacimiento;
    }
    set AnioNacimiento(nuevoAnioNacimiento) {
        this.anioNacimiento = nuevoAnioNacimiento;
    }
}
class Estudiante extends Persona {
    constructor(nombre, apellido, anioNacimiento, matricula, promedioFinal) {
        super(nombre, apellido, anioNacimiento);
        this.matricula = 0;
        this.promedioFinal = 0;
        this.matricula = matricula;
        this.promedioFinal = promedioFinal;
    }
    get Matricula() {
        return this.matricula;
    }
    set Matricula(nuevaMatricula) {
        this.matricula = nuevaMatricula;
    }
    get PromedioFinal() {
        return this.promedioFinal;
    }
    set PromedioFinal(nuevoPromedioFinal) {
        this.PromedioFinal = nuevoPromedioFinal;
    }
}
const estudiante = new Estudiante("Paz", "Santangelo", 1989, 12345, 8);
console.log(estudiante.Nombre);
console.log(estudiante.Apellido);
console.log(estudiante.AnioNacimiento);
console.log(estudiante.PromedioFinal);
