//alert ("ENLAZADO wiwiwiwjsdj");

/*
    Objetos

    Es una colección de propiedades y métodos.

    Las propiedades describen las características del objeto.

    Los métodos describen los comportamientos del objeto.

    Los objetos pueden contener distintos tipos de datos: strings, numbers, arrays, booleans, "undefined", otros objetos e incluso funciones.

    Sintaxis:

    let nombreArray = [];
    let nombreObjeto = [];

    let nombreObjeto = {
        //propiedades y métodos
    };

    Las propiedades dentro de un objeto, se escriben en pares "clave" : "valor"

    let nombre = "Karen" // Variable

    nombre :"Karen" //Propiedad

    Las propiedades de un objeto se separan por comas ´,´

    Las claves de las propiedades pueden tener más de una palabra pero se deberán escribir entre comillas dobles "" o simples ´´

    "nombre real" = "Karen", 

    Se pueden escribir en Camel Case y sin comillas

    nombreReal = "Torta", 
*/

/* Definir personaje */

let personaje = {
    nombre : "Barney", 
    edad : 100,
    residencia : "nuestra mente",
    poderes : false,
    habilidadesHumanas : ["grande", "sorprendente", "amistoso"]
}

/* Accedemos al valor de las propiedades del objeto. */

console.log(personaje.nombre);
//console.log(personaje["habilidades humanas"] [2]);
console.log(personaje.habilidadesHumanas[0])

/* Agregar y borrar propiedades de objetos */

personaje.enemigos = ["ABC", "123"];

delete personaje.poderes;

/*
    Crear solitas y solitos un objeto llamado mascota que tenga 3 propiedades:
    nombre, tipo y edad, con sus respectivos valores.

    Anidamos objetos

    Nombramos al objeto anidado y lo definimos con las llaves {} - Dentro de las llaves se declaran las propiedades en pares "clave" : "valor"

    Métodos

    Es una función que se define como la propiedad de un objeto.

    Sintaxis

    nombreClave : function(parametros) {
        //código que se ejecuta
    }

    this

    Es una palabra reservada que se refiere al objeto actual y sirve para acceder a sus propiedades del mismo. 
*/

let mascota = {
    nombre : "Titis",
    tipo : "tortuga",
    edad : 20, 
    //objeto anidado
    fisico : {
        estatura: 3,
        peso : 500,
        color : "verde"
    },

    //Declaramos un método
    saludo : function(amo) {
        //Cóidigo que se ejecuta al invocar una función
        alert(`*sonidos de tortuga* Me llamo ${this.nombre} y mi amo es ${amo}`);
    }

}

console.log(mascota.fisico.color);
console.log(mascota.fisico.peso);
console.log(mascota.fisico.estatura);

mascota.fisico.colorOjos = "amarillo"; //Agregar
delete mascota.fisico.color; //Eliminamos

/* Accedemos al método saludo del objeto mascota */

mascota.saludo("Karen");