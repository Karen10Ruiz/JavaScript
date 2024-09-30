//alert ("ENLAZADO wiwiwiwi");

/* 
    concatenacion.

    La concatenación es un proceso para unir o combinar dos o más cadenas de texto en una sola. 

    Hay dos formas de realizar la concatenación.

    1. Operador (+) - Este es el metodo má común para concatenar cadenas de texto. 
    2. Template Strings o plantillas de cadenas o plantillas literales (``) - alt gr + C portuguesa | Alt + 96 - Utilizmos los backtics o acentos invertidos y dentro poedemos insertar cadenas de texto inclusive, variables y expresiones. 
*/

//Concatenar con operador (+)

let nombre = "Sopa"
let apellido = "de Macaco"

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto)

//Concatenar con Template Strings 

let saludo = `Hola ${nombre} ${apellido} ¿Cómo estás? ¿Sabías que en términos de reproducción slime y alien, slime es más...`;

console.log (saludo);