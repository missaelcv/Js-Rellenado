// iniciar un arrray
var frutas = ["Mango","Pera","Guineo","Cereza"];

console.log(frutas);

//para ver la longitud del arreglo.

console.log(frutas.length);

//Ver el arreglo o position designada

console.log(frutas[2]);

//Para agregar un objeto nuevo con el método Push 

var masFrutas = frutas.push("uvas");

//Eliminar un arrays con el método pop

var ultimo = frutas.pop("uvas");

//Como Agregar un objeto con el método unshift para un arrays 

var nuevaFruta = frutas.unshift("guineo");

//Eliminar elemento al principio de la posicion 

var borrarfrutas = frutas.shift("guineo");

//Llamar una posicion de arrays
var posicion = frutas.indexOf("Pera")