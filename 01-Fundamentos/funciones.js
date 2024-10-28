//alert ("ENLAZADO wiwiwiwsjda");

/*

    Funciones 
    Son bloques de código reutilizables, ya que realizan un atarea específica.

    En lugar de escribir el mismo código una y otra vez, podemos definir la función una sola vez y usarla siempre que la necesitemos. 

    Conceptos de las funciones.

    *Definir: Creamos la función con un nombre y los datos llamados parámetros. (opcionales)

    *Invocan: Llamamos la función cuando queremos que se ejecute su código, es decir, que haga su tarea. 

    *Retorna: Puede devolver un resultado la función. (opcional) 'return'

    Sintaxis

    function nombreFuncion( parametros1, param2 ) {
    //código que se va a ejecutar.
    return resultado;
    }

    Function -> es la palabra clave para declarar una función. 

    nombreFuncion -> El nombre que le asignamos a la función. Este nombre lo usamos para invocarla. 

    param1, param2 -> Son los datos que le pasamos a la función para que trabajé con ellos en su bloque de código. 

    Cuerpo de la función -> El código que se ejecuta y realiza la tarea de la función. 

    Return -> Devuelve o retorna un resultado. (opcional)

*/

 function saludo() {
    console.log("Holanda")
 }

 //saludo();

 function saludoPersonalizado(nombre) {
    console.log(`Hola ${nombre} tienes nariz de bola🤓`)
 }

//  saludoPersonalizado("Jalea")
//  saludoPersonalizado("Concha")

function sumar(a, b) {
    return a + b
}

let resultado = sumar(10, 20);

console.log ( resultado * 5);

 