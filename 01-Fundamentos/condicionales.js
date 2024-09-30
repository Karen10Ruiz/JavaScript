//alert ("ENLAZADO pipipipi");

/* 
    Condicionales

    Estructura que permiten ejecutar diferentes bloques de código en función de si una condición (expresión) es verdadera o falsa. 

    Estas estructuras controlan el flujo de los programas. 

    1. IF (si)

    El bloque If se ejecuta solo si la condición que se le pasa es verdarera 'true'. Si la condición es falsa 'false' el código de IF se omite.

    if (condición) {
        código que se ejecuta si es verdadera.    
    }
    
    2. Else -> De lo contrario

    Este bloque ejecuta un código cuando las condiciones anteriores NO son verdaderas. 

    if(condición) {
        Código que se ejecuta en caso de que la condición sea verdadera.
    } else {
    Código que se ejecuta en caso de que la condición anteriores del If sea falso.  
    }

    3. Else if -> Si no

    Elklse if nos ayuda a comoporobar condicones adicionales si la condición If es falsa. Podemos tener tantos 'Else If' como necesitemos. Los 'Else If' se escriben entre 'if' y entre 'else'

    if (condicional) {
        //código...
    } else if (condicional) {
        //código que se ejecuta 
    } else if (otro condicional) {
        //otro código 
    } else {
        código... 
    }
*/

//Sentencia o bloqie If 

let numero = 300;

if (false) {
    console.log ("Me ejecute porque la 1era condición es verdadera")
} else if (numero < 500) {
    console.log ("Me ejecuté porque la 2nda opción es verdadera")
} else {
    console.log ("Me ejecuté porque las condiciones anteriores son falsas")
}