export const ej1 = () => {};
class Persona {
    static readonly sexo_defecto : string = 'H';

    private nombre: string;
    private edad: number;
    private DNI: string;
    private sexo: string;
    private peso: number;
    private altura: number;

    constructor(nombre: string = '', edad: number = 0, DNI: string = '', sexo: string = Persona.sexo_defecto , peso: number = 0, altura: number = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}
const persona1 = new Persona('Ambrosio Mendoza Morales', 25, '12345678A', 'H', 23, 167);
const persona2 = new Persona('María Fernanda Shaun', 30, '243534T', 'M', 33, 160);
const persona3 = new Persona('Rigoberta Smith', 30, '346563T', 'M', 47, 160);

console.log('Ambrosio:', persona1);
console.log('Maria:', persona2);
console.log('Rigoberta:', persona3);