//alert ("ENLAZADO wiwiwiwjsdj");

/*

    Práctica Objetos 

    1.- Crea una clase llamada "arma" 
    Debe tener las siguientes propiedades en su constructor:

     *Nombre (string): Nombre del arma
     *Tipo (string): tipo de arma (ej. espada, pistola, arco)
     *Daño (número): Cantidad de daño que puede causar

    Agfrega un método llamado Describir que imprima la consola:

    `Arma: Galadhrim | Tipo: Arco | Daño: 40`

    2.- Crea un objeto llamado arsenal que contega:

    *Una propiedad llamada "armas" que sea un array vacío.
    *Un método agregarArma que recibe un arma como parámetro y la agrega al array armas.

    3.- Instacia armas:

    *Crea tres armas usando la clase Arma con diferentes valores para nombre, tipo y daño.

    4.- Agregar las armas al Arsenal

    *Usa el método agregarArmas del objeto arsenal para agregar cada una de las armas del array armas.

    5.- Muestra la Descripción de las Armas:

    *Usa un bucle for para recorrer el array armas dentro del objeto arsenal.
    *En cada iteración llama al método describir de cada arma para mostrar sus detalles en la consola. 

*/

class Arma {
    constructor(nombre, tipo, daño){
    this.nombre = nombre;
    this.tipo = tipo;
    this.daño = daño;
}

    descripcion(){
        console.log(`Arma: ${this.nombre} | Tipo: ${this.tipo} | Daño: ${this.daño}`)
    }
}


let Arsenal = {
    armas: [],
    agregarArma : function(Arma) {
    this.armas.push(Arma);
    }
}

let arma1 = new Arma("espada", "blanca", 50);
let arma2 = new Arma("pistola", "fuego", 100);
let arma3 = new Arma("metralleta", "mecanismo", 200);

Arsenal.agregarArma(arma1);
Arsenal.agregarArma(arma2);
Arsenal.agregarArma(arma3);

for ( let i = 0 ; i <= 2; i++ ){
    Arsenal.armas[i].descripcion();
}