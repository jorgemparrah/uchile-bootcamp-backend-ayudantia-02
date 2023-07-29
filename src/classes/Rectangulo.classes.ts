import { Figura } from "./Figura.classes";

export class Rectangulo extends Figura {

  private ancho: number;
  private alto: number;

  constructor(ancho: number, alto: number) {
    super("rectangulo")
    this.ancho = ancho;
    this.alto = alto;
  }

  perimetro(): number {
    return 2 * this.ancho + 2 * this.alto;
  }

  getNombre(): string {
    return this.nombre;
  }

  getAncho(): number {
    return this.ancho;
  }

  getAlto(): number {
    return this.alto;
  }

  getColor(): string {
    return this.color;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  setAncho(ancho: number): void {
    this.ancho = ancho;
  }

  setAlto(alto: number): void {
    this.alto = alto;
  }

  setColor(color: string): void {
    this.color = color;
  }

}