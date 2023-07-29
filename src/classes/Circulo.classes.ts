import { Figura } from "./Figura.classes";

export class Circulo extends Figura {

  radio: number;

  constructor(radio: number) {
    super("circulo")
    this.radio = radio;
  }

  perimetro(): number {
    return 2 * this.radio * Math.PI;
  }

  getNombre(): string {
    return this.nombre;
  }

  getColor(): string {
    return this.color;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  setColor(color: string): void {
    this.color = color;
  }



}