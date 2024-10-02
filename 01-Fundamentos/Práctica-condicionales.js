//alert ("ENLAZADO wiwiwiwiu");

/*
    Práctica condicionales. 

    1. Declarar una variable llama edad y asignarle un valor numerico.
    2.Imprimir por consola el valor de la variable edad.
    3. Con el bloque If evaluar si edad es mayor o igual que 18. 
    4. Si esta condición es verdadera, se debe mostrar por consola, el mensaje "Eres mayor de edad"
    5. Agregar otra condición con el bloque Else If, evaluar si edad es menor que 18. 
    6. Si esta condición es true, mostrar por consola el mensaje "Eres menor de edad"
    7. Con el bloque else, evaluar cualquier otro dato distinto a los anteriores. Deberá mostrar por consola "Eres un alien"
    8. Dentro de los bloque If, Else if y Else; cambiar los console.log por alert.
    9. Variable se le cambia el valor de la variable edad por un "promt". Pra que éste dato sea introducido por el usuario. promt("¿Qué edad tienes?")
    10. Tienen 5 minutos para hacer su commit con el mensaje "Esta es mi practica de JavaScript-Auxilio"
*/

let edad =10;
console.log (edad);
prompt("¿Qué edad tienes")

if (true) {
    alert ("Eres mayor de edad")
} else if (edad > 18 ) {
    alert ("Eres menor de edad")
} else {
    alert ("Eres un alien")
}