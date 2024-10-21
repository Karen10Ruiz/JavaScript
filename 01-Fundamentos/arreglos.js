//alert ("ENLAZADO wiwiwiwa");

/*
    Arreglos o arrays

    Son una estructura de datos que permite almacenar múltiples valores en una sola variable.

    Los elementos dentro del a rray tienen una pocisión o indice que permite acceder a ellos.

    Los índices de los datos comienzan en 0.

    Los arrays pueden contener datos de cualquier tipo: números, strings, boleanos, incluso arrays anidados. 

    Sintaxis de un array.

    let nombreArray = [ elemento1, elemento2, elemento3 ]

*/

let frutasFavoritas = ["platano" , "uva" , "papaya"]; 
let numerosSuerte = [2 , 10 , 11, 22, 36];
let meQuiereNoMeQuiere = [true, false, true, false];
let misDatos = ["Karen" , "Chio" , 20 , false];
let anidandoArrays = [ [123,456,789,624], ["Gato, perro, ave"], [true, false, true]];

/*

  Array ->  ["platano" , "uva" , "papaya"]
  Índice ->      0         1        2

  Array ->  [2 , 10 , 11, 22, 36]
  Índice ->  0    1    2   3   4

*/

/*

    Acceder a los elementos de un Array

    Para acceder a un datos usaos la siguiente sintaxis:

    nombreArray[indice];

*/
console.log(frutasFavoritas[2]);
console.log(numerosSuerte[3]);
console.log(anidandoArrays[2][2])

/*

    Modificar elementos del Array

    Para cambiar el valor de cualquier elemetos dentro del array usamos la siguiente sintaxis:

    nombreArray[indice] = nuevoDato

*/

console.log( frutasFavoritas );

frutasFavoritas[0] = "Piña";

console.log( frutasFavoritas );

/*

Métodos útiles patra los Arrays

Los métodos son "funciones" que trabajan con los datos de los Arrays, su sitaxis es la siguiente:

nombreArray.nombreMetodo
nombreArray.nombreMetodo(parametro)

*/

/*

Length nos dice cua tos elemntos tiene un array.

*/

console.log(frutasFavoritas.length);
console.log(numerosSuerte.length);
console.log(anidandoArrays[0].length);

/*

    push() - Agrega un elemento al final del Array

    nombreArray.push(dato)

*/

console.log(frutasFavoritas);

frutasFavoritas.push("maracuya");

console.log(frutasFavoritas);

/*

    pop() - Eliminamos el último elemento del Array y lo devuelve.

    nombreArray.pop()

*/

console.log(numerosSuerte);

let numeroQuitado = numerosSuerte.pop();

console.log(numerosSuerte);

console.log(numeroQuitado);


/*

    unshift() -  Agrega un elemento al inicio del Array

    nombreArray.unshift(dato)
*/

console.log(frutasFavoritas);

frutasFavoritas.unshift("mandarina");

console.log(frutasFavoritas);

/*

shift() - Elimina el primer elemento del Array y lo devuelve. 

nombreArray.shift()

*/

console.log(numerosSuerte);

let quitarPrimero = numerosSuerte.shift();

console.log(numerosSuerte);
console.log(quitarPrimero);

/*

    indexOf () - Encuentra el índice de un elemento en el array.

    nombreArray.indexOf(dato);
*/

let indice = frutasFavoritas.indexOf("uva");

console.log(indice);

/*

    splice () - Puede eliminar o agregar elementos al array desde una posición esoecífica. 

    eliminar: nombreArray.splice(indiceInicio, indiceFinal);

    Agregar: nombreArray.splice(indiceInicio, pasos, valor1, valor2);

*/

console.log(frutasFavoritas);

frutasFavoritas.splice(1,2);

console.log(frutasFavoritas);

frutasFavoritas.splice(1,0, "fresa", "bananoide", "naranja", "aguacate");

/*

slice () - Crea una copia de una porción del Array. NO modifica el original, se crea un nuevo array. 

nombreArray.slice(indiceInicio, indiceFinal);

*/

let frutasCopia = frutasFavoritas.slice(3,6);

console.log(frutasCopia);

/*

    sort() - Ordena los elementos de un Array de mayor a menor.

    nombreArray.sort() - No le pasamos datos entre los paréntesis. 

*/

console.log(frutasFavoritas);

frutasFavoritas.sort();

console.log(frutasFavoritas);


console.log(numerosSuerte);

numerosSuerte.sort();

console.log(numerosSuerte);

