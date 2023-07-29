import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { Rectangulo } from './classes/Rectangulo.classes.ts'
import { IFigura } from './interfaces/IFigura.interfaces.ts'
import { Figura } from './classes/Figura.classes.ts'
import { Contenedor } from './classes/Contenedor.classes.ts'
import { Circulo } from './classes/Circulo.classes.ts'

const listaIFiguras: IFigura[] = [];
const listaFiguras: Figura[] = [];
const listaRectangulos: Rectangulo[] = [];
const listaCirculos: Circulo[] = [];

const r1 = new Rectangulo(1, 5);
const r2 = new Rectangulo(10, 2);
const c1 = new Circulo(3);
const c2 = new Circulo(5);

listaIFiguras.push(r1);
listaIFiguras.push(r2);
listaIFiguras.push(c1);
listaIFiguras.push(c2);

listaFiguras.push(r1);
listaFiguras.push(r2);
listaFiguras.push(c1);
listaFiguras.push(c2);

listaRectangulos.push(r1);
listaRectangulos.push(r2);

listaCirculos.push(c1);
listaCirculos.push(c2);

console.log("listaIFiguras")
for (const iFig of listaIFiguras) {
  console.log(iFig.nombre, iFig.perimetro());
}

console.log("listaFiguras")
for (const fig of listaFiguras) {
  console.log(fig.nombre, fig.color, fig.perimetro());
  fig.imprimir();
}

console.log("listaRectangulos")
for (const r of listaRectangulos) {
  console.log(r.nombre, r.color, r.perimetro());
  console.log("alto, ancho", r.getAlto(), r.getAncho());
  r.imprimir();
}

console.log("listaCirculos")
for (const r of listaCirculos) {
  console.log(r.nombre, r.color, r.perimetro());
  console.log("radio", r.radio);
  r.imprimir();
}


// CONTENEDOR
const lista : Rectangulo[] = [];
lista.push(r1);
lista.push(r2);
// lista.push(c1); // ERROR POR QUE ES SOLO RECTANGULOS
// lista.push(c2); // ERROR POR QUE ES SOLO RECTANGULOS

const contenedorFiguras = new Contenedor<Rectangulo>();
contenedorFiguras.agregar(r1);
contenedorFiguras.agregar(r2);
// contenedorFiguras.agregar(c1);
// contenedorFiguras.agregar(c2);
contenedorFiguras.imprimirLista()

function imprimirNombreFigura<GENERICO>(figura: GENERICO) {
  console.log(figura)
}

console.log("METODO GENERICO")
imprimirNombreFigura<Rectangulo>(r1)


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
