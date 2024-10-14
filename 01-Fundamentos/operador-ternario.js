//alert ("ENLAZADO wiwiwiwichu");

/*

    Ejemplo con If / Else 

    1. Declaramos una variable edad y le asignamos un valor númerico.
    2. Comprobamos si edad es igual o mayor que 18, mostramos el mensaje "Eres mayor de edad"
    3. Si edad, no es mayor qe 18, mostramos el mensaje "Eres un bebé"

*/

/* let edad = 22;

if (edad >= 18) {
    console.log ("Eres mayor de edad");
} else {
    console.log ("Eres un bebé");
} */

/*

    El operador ternario es una forma más concisa de escribir una condición If / Else.

    Trabaja copn 3 operandos:

    1. Una condición
    2. La expresión si la condición es verdadera.
    3. La expresión si la cndición es falsa.

    Sintaxis:

    condicion ? expresionSiVerdadera : expresionSiFalsa

*/

let edad =2;

let resultado = edad >= 18 ? "Eres mayor de edad" : "Eres un bebé";

console.log(resultado)