//Operadores 

var edad = 18;

if (edad === 18 ) {
    console.log("Puedes Votar...");
} else if (edad > 19 ) {
    console.log("Tu segunda Votacion ")
} else if (edad > 20 ) {
    console.log("Tu segunda Votacion ")
} else {
    console.log("Aun no puedes votar ")
}

condition ? true: false;


var numero = 3; 

var resultado = numero === 1 ? "Soy un numero 1" : "no Soy el uno";

console.log(resultado);


var tiro1 = "papel";
var tiro2 = "tijera";
var tiro3 = "piedra";

var juego = function(usuario, maquina){
    if (usuario != maquina){
        if (usuario === tiro1 && maquina === tiro3) {
            console.log("el usuario Gano con"+ tiro1)
        } else if (usuario === tiro2 && maquina === tiro1){
            console.log("el usuario Gano con"+ tiro2)
        } else if (usuario === tiro3 && maquina === tiro2){
            console.log("el usuario Gano con"+ tiro3)
    } else { 
        console.log("Gano el Usuario");
    }
        } else if (usuario === maquina){
            console.log("Emapte")
        }
}
juego(tiro1,tiro3);