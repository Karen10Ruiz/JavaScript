/*
  Operadoes

  Son símbolos utilizados para realizar operaciones sobre valores y variables.

  1.Ariméticos
  2.Asignación
  3. Comparación

*/

/*
  1. Aritméticos

  Se utilizan para realizar cálculos matemáticos. 
*/

// Suma (+): Suma ddos valores

let suma = 16 + 6;
console.log(suma);

// Resta (-): Resta el segundo

let resta = 54 - 15; 
console.log(resta);

//Multiplicación (*): Multiplica los valores.
let multi = 4 * 8;
console.log(multi);

//División (/): Divide el primer valor por el segundo
let divi = 20 / 4;
console.log(divi);

//Módulo (%): Devuelve el resto de la división entre dos valores. 
let mod = 7 % 2; 
let mod2 = 9 % 3; 
console.log(mod);
console.log(mod2);

//Exponenciación (**) : Eleva un número a la potencia del otro. 
let expo = 3 ** 2;
let expo2 = 5 ** 12;
console.log(expo);
console.log(expo2);

//Incremento (++) : Incrementa el valor en una unidad.
let x = 2; 
x ++;
console.log(x);

//Decremento (--) : Decrementa el valor en uno.
let y = 6;
y --;
console.log(y);


/* 
  Operadores de asignación 

  Estos operadores asignan vslores a las variables. 

*/

//Asignación (=): Asigna un valor a una variable. 

let w = 45; 

//Asignación con suma (+=): Nos va a asignar un valor mientras hace una suma. Suma el valor a una variable y la reasigna. 

w += 5; //50
console.log(w)

//Asiganación con resta (-=): Resta el valor a una variable y la reasigna.

w -= 15; //35
console.log(w)

//Asignación con multiplicación (*=): Multiplica una variable por un valor y la reasigna. 

w *= 2;  //70
console.log(w)

//Asignación con división (/=): Esto divide una variable por un valor y la reasigna. 

w /= 10;
console.log(w)


/* 

  3.  Comparación

  Estos operadores comparan 2 valores y devuelve 'true' o 'false'.

*/

// Igualdad (==): Compara los valores para ver si son iguales. NOTA: No toma en cuenta el tipo de dato. 

let valor = "5";
let compara = 5 == valor; 

console.log(compara) //true

//Igualdad estricta (===): Compara dos valor y su tipo para ver si son exactamente iguales. 

compara = 5 === valor;

console.log(compara) //false 

//Desigualdad (!=): Verifica si 2 valores no son iguales. NOTA: NO toma en cuenta el tipo de dato. 

let valor1 = "10";
let valor2 = 10;

console.log(valor1 != valor2) //false

//Desigualdad estricta (!==) : Verifica si 2 valores y sus tipos no son exactamente iguales. 

valor1 = "10";
valor2 = 10;

console.log(valor1 !== valor2) //true

// Mayor que (>) :Verifica si el primer valor es mayor que el segundo.

compara = 5 > 10;

console.log(compara) //false

// Mayor o igual que (>=) : Verifica si el primer vslor es mayor o igual que el segundo. 

compara = 5 >= 5;

console.log(compara) //true

//Menor que (<) : Verifica si el primer valor es menor que el segundo. 

console.log(3 < 8); // true
console.log(10 < 8); // false
console.log(5 < 5); // false

//Menor o igual que (<=) : Verifica si el primer valor es menor o igual que el segundo valor.

console.log(4 <= 10); //true 
console.log(20 <= 100); //true
console.log(45 <= 7); //false
console.log(8 <= 8); //true