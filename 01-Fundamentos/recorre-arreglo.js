//alert ("ENLAZADO wiwiwiwjsdj");

/*
    Recorrer Arreglos

    Podemos acceder a cada dato de un arreglo a través de su índice. Ya sea para obtener el dato o hacer algo con ese índice. 

*/

/*
    Definir un array
*/

let colores =["morado", "dorado", "cyan", "amarillo", "Celeste"]
//Índices       0          1        2         3           4

//Imprimimos por consola los datos del array
/* console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]); */

//let valor = colores.length;

colores.push("magenta");

//Recorrer el array con el bucle for

/* for ( let i = 0 ; i < colores.length ; i++ ) {
    //código que se ejecuta
    console.log( colores[i] )
} */

/*

Bucle for ... of

Es una manera simpke y moderna de recorrer arrays en JS. 
Este bucle nos permite recorrer o acceder al valor de cada elemento sin necesidad de usar índices. 

SINTAXIS

for ( const elemento of nombreArray ) {
  
//código a ejecutar por cada elemento del array
}

*/

for ( const color of colores ) {
    //código a ejecutar

    console.log(`colorcito: ${color}`)
}




let huevitos =["Booby", "Tilín", "JuanaFlippa"]
huevitos.push("Leonarda");
for ( const nombres of huevitos) {
    console.log(`Huevitos: ${nombres}`)
}
