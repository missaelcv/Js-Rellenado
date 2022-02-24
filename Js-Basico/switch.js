//Juego Con Swicth

var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];

switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}


// var numero = 100;

// switch (numero) { 
//     case 1: 
//     console.log("Soy Uno");
//         break;
//     case 5:
//         console.log("soy el cinco");
//         break;
//     case 5:
//         console.log("soy el cinco");
//         break;

//         default:

//         console.log("Morir");
// }

