export let ej3 = () => {};

class Electrodomestico {
  protected precio: number;
  protected color: string;
  protected consumo: string;
  protected peso: number;

  static readonly color_defecto: string = "blanco";
  static readonly consumo_defecto: string = "F";
  static readonly precio_defecto: number = 100;
  static readonly peso_defecto: number = 5;
  static readonly colores_defectos: string[] = [
    "blanco",
    "negro",
    "rojo",
    "azul",
    "gris",
  ];
  static readonly letras_validas = ["A", "B", "C", "D", "E", "F"];

  constructor(
    precio: number = Electrodomestico.precio_defecto,
    color: string = Electrodomestico.color_defecto,
    consumo: string = Electrodomestico.consumo_defecto,
    peso: number = Electrodomestico.peso_defecto
  ) {
    // Verificar y asignar valores válidos
    this.precio = precio;
    this.color = Electrodomestico.comprobarColor(color);
    this.consumo = Electrodomestico.comprobarconsumo(consumo);
    this.peso = peso;
  }

  private static comprobarColor = (color: string): string => {
    let color_valido = Electrodomestico.colores_defectos.find(
      (c) => c.toLowerCase() === color.toLowerCase()
    );
    if (color_valido) {
      return color_valido;
    } else {
      return Electrodomestico.color_defecto;
    }
  };

  private static comprobarconsumo = (consumo: string): string => {
    if (this.letras_validas.includes(consumo.toUpperCase())) {
      return consumo.toUpperCase();
    } else {
      return Electrodomestico.consumo_defecto;
    }
  };

  public precioFinal (): number {
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
  };
}
//Lavadora
class Lavadora extends Electrodomestico {
  private carga: number = 5;

  constructor(carga: number) {
    super();
    this.carga = carga;
  }

  getCarga(): number {
    return this.carga;
  }

  public precioFinal(): number  {
    let precio_electrodomestico = super.precioFinal();
    return this.carga > 30
      ? precio_electrodomestico + 50
      : precio_electrodomestico;
  };
}
// televisor
class Televisor extends Electrodomestico {
  protected resolucion: number;
  protected es_4K: boolean;
  constructor(resolucion: number = 20, es_4K: boolean = false) {
    super();
    this.resolucion = resolucion;
    this.es_4K = es_4K;
  }

  public get_resolucion = (): number => {
    return this.resolucion;
  };
  public get_4k = (): boolean => {
    return this.es_4K;
  };
  public precioFinal (): number {
    let precio_electrodomestico: number = super.precioFinal();
    let precio_extra: number =
      this.resolucion > 40 ? (precio_electrodomestico / 100) * 30 : 0;
    precio_extra += this.es_4K ? 50 : 0;
    return precio_electrodomestico + precio_extra;
  };
}

class MainApp {
  static run(): void {
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

    let electrodomesticos: Electrodomestico[] = [
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
      console.log("Precio final: "+precioFinal);
      precio_total_electrodomesticos += precioFinal;
      if (electrodomesticos[i] instanceof Lavadora) {
        precio_total_lavadoras += precioFinal;
      } else if (electrodomesticos[i] instanceof Televisor) {
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