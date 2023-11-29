"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ej3 = void 0;
let ej3 = () => { };
exports.ej3 = ej3;
class Electrodomestico {
    constructor(precio = _a.precio_defecto, color = _a.color_defecto, consumo = _a.consumo_defecto, peso = _a.peso_defecto) {
        // Verificar y asignar valores válidos
        this.precio = precio;
        this.color = _a.comprobarColor(color);
        this.consumo = _a.comprobarconsumo(consumo);
        this.peso = peso;
    }
    precioFinal() {
        let plus_precio = 0;
        let letra = this.consumo;
        switch (letra) {
            case "A":
                plus_precio += 100;
                break;
            case "B":
                plus_precio += 80;
                break;
            case "C":
                plus_precio += 60;
                break;
            case "D":
                plus_precio += 50;
                break;
            case "E":
                plus_precio += 30;
                break;
            case "F":
                plus_precio += 10;
                break;
        }
        plus_precio +=
            this.peso >= 0 && this.peso < 20
                ? 10
                : this.peso >= 20 && this.peso < 50
                    ? 50
                    : this.peso >= 50 && this.peso < 80
                        ? 80
                        : this.peso >= 80
                            ? 100
                            : 0;
        return this.precio + plus_precio;
    }
    ;
}
_a = Electrodomestico;
Electrodomestico.color_defecto = "blanco";
Electrodomestico.consumo_defecto = "F";
Electrodomestico.precio_defecto = 100;
Electrodomestico.peso_defecto = 5;
Electrodomestico.colores_defectos = [
    "blanco",
    "negro",
    "rojo",
    "azul",
    "gris",
];
Electrodomestico.letras_validas = ["A", "B", "C", "D", "E", "F"];
Electrodomestico.comprobarColor = (color) => {
    let color_valido = _a.colores_defectos.find((c) => c.toLowerCase() === color.toLowerCase());
    if (color_valido) {
        return color_valido;
    }
    else {
        return _a.color_defecto;
    }
};
Electrodomestico.comprobarconsumo = (consumo) => {
    if (_a.letras_validas.includes(consumo.toUpperCase())) {
        return consumo.toUpperCase();
    }
    else {
        return _a.consumo_defecto;
    }
};
//Lavadora
class Lavadora extends Electrodomestico {
    constructor(carga) {
        super();
        this.carga = 5;
        this.carga = carga;
    }
    getCarga() {
        return this.carga;
    }
    precioFinal() {
        let precio_electrodomestico = super.precioFinal();
        return this.carga > 30
            ? precio_electrodomestico + 50
            : precio_electrodomestico;
    }
    ;
}
// televisor
class Televisor extends Electrodomestico {
    constructor(resolucion = 20, es_4K = false) {
        super();
        this.get_resolucion = () => {
            return this.resolucion;
        };
        this.get_4k = () => {
            return this.es_4K;
        };
        this.resolucion = resolucion;
        this.es_4K = es_4K;
    }
    precioFinal() {
        let precio_electrodomestico = super.precioFinal();
        let precio_extra = this.resolucion > 40 ? (precio_electrodomestico / 100) * 30 : 0;
        precio_extra += this.es_4K ? 50 : 0;
        return precio_electrodomestico + precio_extra;
    }
    ;
}
class MainApp {
    static run() {
        let electrodomestico1 = new Lavadora(10);
        let electrodomestico2 = new Lavadora(25);
        let electrodomestico3 = new Televisor(30, true);
        let electrodomestico4 = new Televisor(45, false);
        let electrodomestico5 = new Electrodomestico();
        let electrodomestico6 = new Lavadora(15);
        let electrodomestico7 = new Televisor(55, true);
        let electrodomestico8 = new Televisor(40, false);
        let electrodomestico9 = new Electrodomestico(150, "negro", "A", 25);
        let electrodomestico10 = new Lavadora(20);
        let electrodomesticos = [
            electrodomestico1,
            electrodomestico2,
            electrodomestico3,
            electrodomestico4,
            electrodomestico5,
            electrodomestico6,
            electrodomestico7,
            electrodomestico8,
            electrodomestico9,
            electrodomestico10,
        ];
        let precio_total_electrodomesticos = 0;
        let precio_total_lavadoras = 0;
        let precio_total_televisiones = 0;
        for (let i = 0; i < electrodomesticos.length; i++) {
            const precioFinal = electrodomesticos[i].precioFinal();
            console.log(`Precio final: ${precioFinal}`);
            precio_total_electrodomesticos += precioFinal;
            if (electrodomesticos[i] instanceof Lavadora) {
                precio_total_lavadoras += precioFinal;
            }
            else if (electrodomesticos[i] instanceof Televisor) {
                precio_total_televisiones += precioFinal;
            }
        }
        console.log("total electrodomesticos : " + precio_total_electrodomesticos + "€");
        console.log("total lavadoras :" + precio_total_lavadoras + "€");
        console.log("total televisiones :" + precio_total_televisiones + "€");
    }
}
MainApp.run();
//
