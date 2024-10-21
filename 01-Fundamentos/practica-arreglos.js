//alert ("ENLAZADO wiwiwiwichu");

/*

Práctica arreglos - Liga Superheroes 

1. Definir un arreglo llamado "heroes" que contenga 5 nombre de superheroes.
2. Agregamos un nuevo heroe al final del Array
3. Eliminar el primer heroe
4. Cambiamos al 3er heroe por otro
5. Ordenar alfabeticamente el array "heroes"
6. Crear un nuevo array llamado "enemigos", con los últimos 3 heroes del array
7. Mostrar por consola los 2 arrays "heroes" y "enemigos"

*/

let heroes = ["spiderman", "batman", "ironman", "superman", "hulk"];

//console.log(heroes);
heroes.push("antman");
//console.log(heroes);

heroes.shift();
//console.log(heroes);

//console.log(heroes);
heroes[2] = "blackwidow";
//console.log(heroes);

//console.log(heroes);
heroes.sort();
//console.log(heroes);

let enemigos = heroes.splice (2, 5);
console.log(enemigos);
console.log(heroes);
