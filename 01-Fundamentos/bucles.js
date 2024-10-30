//alert ("ENLAZADO wiwiwiwjsdj");

/*

    Ciclos o bucles

    Nos permiten ejecutar un bloque de código varias veces.

    + Facilita tareas repetitivas y ahorra tiempo.

*/

/*

    1. for

    Este bucle tiene 3 partes clave:

    1. Inicialización de una variable.
    2. Condición que evalua el valor de la variable. 
    3. Actualización del valor de la variable.

     Sintaxis

    for (inicialización ; condición ; actualización) {
    código que se ejecuta
    }
 
*/

for (let i = 1 ; i <= 10 ; i++) {
    //código que se ejecuta
    //console.log("mensaje:" + i)
}

for (let i = 10; i >= 0 ; i--) {
    //console.log(i)
}

/*

    2. While

    Este ciclo ejecuta su bloque de código mientras la condición especificada sea verdadera.

    Sintaxis: 

    Se define la variable fuera del ciclo

    let nombreVariable = valor;

    while (condición) {
     //código a ejecutar
    }

    nombreVariable++ //Actualización 
*/

    let contador =0; //definición

    while ( contador < 3) { //condición
        console.log ("Gato" + contador)
        contador++; //Actualización
    }

    let veces = 5;

    while (veces > 2) {
        console.log ("Veces :" + veces);

        veces--;
    }

/*

    3. do...while

        Es similar a while, pero garantiza que el bloque de código se ejecute al menos una vez.

        Primero se ejecuta el código y luego se verifica la condición.

        Sintaxis

    //La variable se define fuera del ciclo.

    let nombreVariable = valor // Definición

         do {
         //código quer se ejecuta

         nombreVariable++ //Actualización
         } while (condición);


*/

let numero = 0;

do {
    //código que se ejecuta al menos una vez
    console.log("El numero es:" + numero);

    numero++;
} while (numero < 10 );

numero--;