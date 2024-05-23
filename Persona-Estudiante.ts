class Persona {
    private nombre: string;
    private apellido: string;
    private anioNacimiento: any;

    constructor(nombre: string, apellido: string, anioNacimiento: any) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.anioNacimiento = anioNacimiento;
    }

    get Nombre(): string {
        return this.nombre;
    }

    set Nombre(nuevoNombre: string) {
        this.nombre = nuevoNombre;
    }

    get Apellido(): string {
        return this.apellido;
    }

    set Apellido(nuevoApellido: string) {
        this.apellido = nuevoApellido;
    }

    get AnioNacimiento(): any {
        return this.anioNacimiento;
    }

    set AnioNacimiento(nuevoAnioNacimiento: any) {
        this.anioNacimiento = nuevoAnioNacimiento;
    }
}

class Estudiante extends Persona {
    private matricula: number = 0;
    private promedioFinal: number = 0;

    constructor(nombre: string, apellido: string, anioNacimiento: any, matricula: number, promedioFinal: number) {
        super(nombre, apellido, anioNacimiento);
        this.matricula = matricula;
        this.promedioFinal = promedioFinal;
    }

    get Matricula(): number {
        return this.matricula;
    }

    set Matricula(nuevaMatricula: number) {
        this.matricula = nuevaMatricula;
    }

    get PromedioFinal(): number {
        return this.promedioFinal;
    }

    set PromedioFinal(nuevoPromedioFinal: number) {
        this.PromedioFinal = nuevoPromedioFinal;
    }
}

const estudiante = new Estudiante("Paz", "Santangelo", 1989, 12345, 8);
console.log(estudiante.Nombre);
console.log(estudiante.Apellido);
console.log(estudiante.AnioNacimiento);
console.log(estudiante.PromedioFinal);
