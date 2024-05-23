class Auto {
    private marca: string;
    private modelo: string;
    private patente: string;
    private motor: Motor;

    constructor(marca: string, modelo: string, patente: string, motor: Motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.motor = motor;
    }

    get Marca(): string {
        return this.marca;
    }

    set Marca(nuevaMarca: string) {
        this.marca = nuevaMarca;
    }

    get Modelo(): string {
        return this.modelo;
    }

    set Modelo(nuevoModelo: string) {
        this.modelo = nuevoModelo;
    }

    get Patente(): string {
        return this.patente;
    }

    set Patente(nuevaPatente: string) {
        this.patente = nuevaPatente;
    }

    get Motor(): Motor {
        return this.motor;
    }

    set Motor(nuevoMotor: Motor) {
        this.motor = nuevoMotor;
    }
}

class Motor {
    private cilindrada: number;

    constructor(cilindrada: number) {
        this.cilindrada = cilindrada;
    }

    get Cilindrada(): number {
        return this.cilindrada;
    }

    set Cilindrada(nuevaCilindrada: number) {
        this.cilindrada = nuevaCilindrada;
    }
}

const motor = new Motor(1600);
const auto = new Auto("Renault", "Sandero", "ABC123", motor);

console.log(auto);
