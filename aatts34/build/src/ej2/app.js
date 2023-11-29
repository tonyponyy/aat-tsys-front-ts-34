"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ej2 = void 0;
const ej2 = () => { };
exports.ej2 = ej2;
class Password {
    constructor(longitud = 8, contrasenia) {
        this.crea_contra = () => {
            let contra = "";
            for (let index = 0; index < this.longitud; index++) {
                let char = String.fromCharCode(Math.random() * 155 + (33));
                contra += char;
            }
            return contra;
        };
        this.longitud = longitud;
        this.contrasenia = contrasenia;
    }
}
;
const ps1 = new Password(8, "");
console.log(ps1.crea_contra());
