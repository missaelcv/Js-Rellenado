// //Funcion Construtora de un objeto. 
// function carro(marca, modelo, annio){

//     this.marca= marca; 
//     this.modelo = modelo;
//     this.annio = annio;

// }

// var carroNuevo = new carro("Honda","civil",2021);

// var carroNuevo2 = new carro("Corola","Toyota",2018);

// var carroNuevo3= new carro("Ford","Colorado",2017);

function miListaDeCarror(marca, modelo, goma, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.goma = goma; 
    this.annio = annio;
}
var miListaDeCarror = [];

for (var i = 0; i  < 30; i ++){
    var marca = prompt("Ingrese la marca");
    var modelo = prompt("Ingrese la modelo");
    var goma = prompt("Ingrese la goma");
    var annio = prompt("Ingrese la annio");

    miListaDeCarror.push(new miListaDeCarror(marca,modelo,goma,annio)); 
}

for (var i = 0; i < miListaDeCarror.length; i++) {
    console.log(miListaDeCarror[i]);
}
