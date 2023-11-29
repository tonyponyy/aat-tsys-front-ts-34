"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ej1 = void 0;
const ej1 = () => { };
exports.ej1 = ej1;
class Persona {
    constructor(nombre = '', edad = 0, DNI = '', sexo = Persona.sexo_defecto, peso = 0, altura = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}
Persona.sexo_defecto = 'H';
const persona1 = new Persona('Ambrosio Mendoza Morales', 25, '12345678A', 'H', 23, 167);
const persona2 = new Persona('María Fernanda Shaun', 30, '243534T', 'M', 33, 160);
const persona3 = new Persona('Rigoberta Smith', 30, '346563T', 'M', 47, 160);
console.log('Ambrosio:', persona1);
console.log('Maria:', persona2);
console.log('Rigoberta:', persona3);
