/*
  Tipos de datos

Los tipos de datos se dividen en primitivos y complejos.

  1. Tipos de datos primitivos
  Datos básicos que no se consideran "objetos" y no tienen "métodos".

  Tipo number o número: Reresentación de valores númericos, enteros o con decimáles (punto flotante)

  *String o cadena de caracteres

  Se usa para representar texto. El texto se coloca entre comillas dobles o simples "texto" 'texto'

  *Boolean o Boleanos

  Estos representan un valor lógico que puede ser 'true' o 'false'

  *Undefined o indefinido

  Es el valor que se le asigna a una variable que ha sido declarado pero no inicializada. 

  2. Datos complejos o de objeto

  *Array  o arreglo

  Un conjunto de datos que los almacena en una lista ordenada de elementos. Los datos dentro de los arreglos se escriben entre corchetes [] y separados por comas , 

  * Object

  Este tipo de dato es un conjunto de múltiples pares de algo que se llama 'clave' - 'valor'. Se escriben entre llaves {} y separados por comas. 

  *Functions o funciones

  Son un tipo de dato que puede ser "invocado" .Se declaran con la pala bra resrvada "function" y el código que ejecutan entre llaves {"código"}
*/

/* Numbers */

let miNumero = 11;
let miNumeroDecimal = 3.7846;

console.log(miNumero);
console.log(miNumeroDecimal);

/* Strings */

let miNombre = 'Karen';
let miApellido = 'Chio';

console.log(miNombre);
console.log(miApellido);

/* Boolean */

let miVerdad = true;
let miMentira = false; 

console.log(miVerdad);
console.log(miMentira);

/* Undefined */

let x; //Declarar una variable sin inicilizarla. 
console.log(x);

/*x = prompt("¿Cual es tú número favorito?")*/

console.log(x); //El valor que el usuario introduzca

/* Array */

let misFrutasFavoritas = ["Platano", "Uvas", "Papaya"];
let misNumeroSuerte = [2, 11, 220, 5000];
let otroArray = ["Queso", 11 , true];

console.log(misFrutasFavoritas[1]);
console.log(misNumeroSuerte);
console.log(otroArray);

/* Objeto */

let persona = {
  // clave : valor, 
  nombre : "Tilín",
  edad : 15,
  colorCabello : "negro",
  colorOjos: "rojo",
  altura : 1.68,
  peso : undefined,
  vivo : true, /* en mi mente */
  novio : false, /* el Bobby */
}

console.log(persona)
//Accedemos al valorde una clave dentro de un objeto.
//Con la notación de punto.
console.log(persona.nombre);
console.log(persona.altura);
console.log(persona.novio);

/* Function */

let mensajito = function () {
  //Pasamos el código que ejecuta la función
  console.log("Este es un mensajito lanzado por una función")
}

//Invocamos a la función
mensajito();