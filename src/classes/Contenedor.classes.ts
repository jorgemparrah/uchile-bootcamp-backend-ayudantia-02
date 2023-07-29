export class Contenedor<TIPO_GENERICO> {

  contenido: TIPO_GENERICO[] = [];

  agregar(objeto: TIPO_GENERICO) {
    this.contenido.push(objeto);
  }

  imprimirLista() {
    for (const objeto of this.contenido) {
      console.log(objeto);
    }
  }

}