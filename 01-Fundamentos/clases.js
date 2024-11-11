//alert ("ENLAZADO wiwiwiwjsdj");

/*

    Clases

    Una clase en Js es una plantilla para crear objetos.

    Es una forma moderna y natural de trabajr con la programación orientada a objetos.
    
    Los nombres de las clases se recomiendan escribirlos con letra mayuscula al principio
 

    MÉTODO CONSTRUCTOR
    Es un método especial que se ejcuta automáticamente cuando sea crea una instancia de la clase. 

    Dentro del método constructor pasamos las propiedades y la clase.

    Las propiedades pasan como parámetros y luego se asignan con ´this´


    SINTAXIS BÁSICA

    class nombreClase {
     //Método constructor

        constructor (par1, par2) {
        this.par1 = par1;
        this.par2 = par2;
        }

    }

    INSTANCIA DE CLASE 

    Para crear un objeto usando la clase, se utiliza la palabra ´new´,  esto invoca al constructor de la clase.

    SINTAXIS:

    new NombreClase (par1, par2);

    Esta instanciase asigna una variable o constante. 

    MÉTODOS DE CLASE

    Se definen dentro de una clase y asignan automáticamente al ´prototipo´ objeto Esto permite que todas las instancias compartan el mismo método.

    SINTAXIS:

    nombreMetodo(param...) {
        //Código que se ejecuta
    }

*/

//Definir la clase ´mascota´

class Mascota {
    constructor(nombre,edad) {
        this.nombre = nombre; //Esto crea la propiedad nombre
        this.edad = edad;  //Esto crea la propiedad edad
    }

    saludo(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años!`)
    }

}

//Instancear la clase ´Mascota´. Creamos un objeto con la plantilla Mascota.

let mascota1 = new Mascota ("Titis" , 20);
let mascota2 = new Mascota ("Goldie", 10);

//Acceder a los datos de las Instancias

console.log(mascota1.nombre);
console.log(mascota1.edad);

//Lanzar los métodos de los objetos
mascota1.saludo();
mascota2.saludo();