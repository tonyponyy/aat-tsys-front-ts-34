export const ej2 = () => {};
class Password {
    private longitud: number;
    private contrasenia: string;
    constructor(longitud:number=8,contrasenia:string) {
        this.longitud=longitud;
        this.contrasenia = contrasenia;
    }

    crea_contra = ()=>{
        let contra:string = ""
        for (let index = 0; index < this.longitud; index++) {
            let char:string = String.fromCharCode(Math.random()*155+(33));
          contra +=char;
        }
        return contra;
    }

};

const ps1 = new Password(8,"");
console.log(ps1.crea_contra()) ;