//alert ("ENLAZADO wiwiwiwiu");

/*
    Instrucciones condicionales If / Else if / Else
    1. Crear una variable día y asignarle un valor númerico. 
    2. Con la sentencia If / Else / Else if. Evaluar la variable del valor día con las siguientes condiciones:

    - dia == 1 // Lunes
    - dia == 2 // Martes
    - dia == 3 // Miercoles
    - dia == 4 // Jueves
    - dia == 5 // Viernes
    - dia == ? // dia no valido

*/

/* let dia = 8;

if (dia === 1) {
    console.log ("Lunes");
} else if (dia === 2) {
    console.log ("Martes")
} else if (dia === 3) {
    console.log ("Miercoles");
} else if (dia === 4) {
    console.log ("Jueves")
} else if (dia === 5) {
    console.log ("Viernes");
} else {
    console.log ("Dia no válido")
} */


/*
  
    Switch

    Es una estructura de control de flujo condicional, pero se utiliza cuando tenemos múltiples casos posibles cuando tenemos una evaluación. 

    Es más eficiente y legible en situaciones donde se quiere comparar una sola variable con varios valores posibles. 

    Sintaxis: 

    switch (expresión) {
    case valor1:
        // Código que se ejecuta
        break;
        case valor2:
        // código que se ejecuta
        break;
        case valor3:
        // código que se ejecuta
        break;
        default: 
        // código que se ejecutapor default
    
    }

*/

let dia = 5;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    default:
        console.log("Día no válido")
}

/*
    Ejercicio Switch

    1. Crear una variable pokemon y asignarle un valor en string con el nombre de un pokemon
*/

let pokemon = "Vaporeon";

switch (pokemon) {
    case "Eevee":
        console.log (`Tu pokemon ${pokemon} y es tipo normal`);
        break;
    case "Flareon":
        console.log (`Tu pokemon es ${pokemon} y es tipo fuego`);
        break;
    case "Vaporeon":
        console.log (`Tu pokemon ${pokemon} y es tipo Agua`);
        break;
    default:
        console.log(`¿Quién es este pokemon?`)
}