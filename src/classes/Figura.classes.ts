import { IFigura } from "../interfaces/IFigura.interfaces";

export abstract class Figura implements IFigura {

  nombre: string;
  color: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  abstract perimetro(): number;

  imprimir(): void {
    console.log(`Soy un ${this.nombre} y mi perimetro es: ${this.perimetro()}`)
  }

}