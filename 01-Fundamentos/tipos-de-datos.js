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

  2. Datos complejos

  *Array  o arreglo

  Un conjunto de datos que los almacena en una lista ordenada de elementos. Los datos dentro de los arreglos se escriben entre corchetes [] y separados por comas , 
*/

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

x = prompt("¿Cual es tú número favorito?")

console.log(x); //El valor que el usuario introduzca

/* Array */

let miFrutasFavoritas = ["Platano", "Uvas", "Papaya"];
let misNumeroSuerte = [2, 11, 220, 5000];
let otroArray = ["Queso", 11 , true];

console.log(misFrutasFavoritas);
console.log(misNumerosSuerte);
console.log(otroArray);