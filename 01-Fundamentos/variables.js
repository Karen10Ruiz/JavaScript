/* 
  Variables

  Son contenedores que almacenan datos.

  Se delcaran usando las palabras reservadas:

  var -> Forma tradicional pero ya NO se recomienda.
  let -> Es la forma moderna, es la recomendada.
  const -> Es una forma moderna pero el dato almacenado no puede cambiar. 

  Para declarar una variable usamos una de estas palabras.

  var + nombredelavariable = valor;

*/

var nombre = "Karen";
let edad = 20;
const vivo = true; 

console.log(nombre);
console.log(edad);
console.log(vivo);

/*
  Las variables declaradas con var y let pueden cambiar a lo largo del código, siempre y cuando su alcance lo permita. 

  Las variables declaradas con "const" NO pueden cambiar.
  Si lo intetamos marcará error.

  Para cambiar el valor de una varible:

  [nombreVariable] = [nuevoValor]
*/

 nombre = "jalea";

 //Mostrar los nuevos datos
console.log(nombre);

edad = 40;
console.log(edad);

/*vivo = false;
console.log(vivo);*/