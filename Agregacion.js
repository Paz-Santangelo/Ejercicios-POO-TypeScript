"use strict";
class Auto {
    constructor(marca, modelo, patente, motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.motor = motor;
    }
    get Marca() {
        return this.marca;
    }
    set Marca(nuevaMarca) {
        this.marca = nuevaMarca;
    }
    get Modelo() {
        return this.modelo;
    }
    set Modelo(nuevoModelo) {
        this.modelo = nuevoModelo;
    }
    get Patente() {
        return this.patente;
    }
    set Patente(nuevaPatente) {
        this.patente = nuevaPatente;
    }
    get Motor() {
        return this.motor;
    }
    set Motor(nuevoMotor) {
        this.motor = nuevoMotor;
    }
}
class Motor {
    constructor(cilindrada) {
        this.cilindrada = cilindrada;
    }
    get Cilindrada() {
        return this.cilindrada;
    }
    set Cilindrada(nuevaCilindrada) {
        this.cilindrada = nuevaCilindrada;
    }
}
const motor = new Motor(1600);
const auto = new Auto("Renault", "Sandero", "ABC123", motor);
console.log(auto);
