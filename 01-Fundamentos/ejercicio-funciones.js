//alert ("ENLAZADO pipipipi");

/*
    1. Definir una variable llamada ´Héroe´ que obtenga un dato en string con el nombre de un superheroe
    2. Definimos una función llamada ´obtener poder´
    3. Esta función recibe el parámetro heroe que será validado en el cuerpo de la función. 
    4. En el cuerpo de la función:
        si heroe === "superman" -> por consola,, tu poder es "superfuerza" 
        si heroe === "flash" -> Tu poder es "supervelocidad"
        si heroe === "batman" -> tu poder es "supermillonario"
        si no === "No te invitaron a la fiesta"
    5. Invocar a la función con su parámetro "héroe"
    6. Para probar que sus condiciones funcionen, cambiar el valor ´héroe´
    RATO EXTRA: Hacer que el valor de la variable ´heroe´ le asigne el usuario.

*/

/* let heroe = "Superman"

function obtenerPoder() {
    console.log("superfuerza")
 };

 function heroe(superman) {
    console.log(`Hola ${superman} tienes superfuerza`)
 };
 */

let heroe = prompt ("Elige un héroe!!"); 
function obtenerPoder(heroe) {
    if(heroe === "superman") {
    console.log("tu poder es superfuerza")
    } else if (heroe === "flash") {
    console.log ("tu poder es supervelocidad")
    }else if (heroe === "batman") {
    console.log ("tu poder es ser super millonario")
    } else {
    console.log ("No te invitaron a la fiesta")
    }
}

obtenerPoder(heroe) //Invocar función