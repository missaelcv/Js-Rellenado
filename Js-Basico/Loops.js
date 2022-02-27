//Trabajar con LOOPS
var estudiantes = ["Maileny","Missael", "Jose","Maria"];

//Loops inicia esta tarea 
function saludarEstudiantes(estudiantes) {
    console.log(`Hola Como estas! , ${estudiantes}`);
}
//Primera forma de  for 
for(var i = 0; i < estudiante.length; i++ ) {
       saludarEstudiantes(estudiantes[i]);
}

//La palabra of se pronuncia (De)

//Segunda forma de for of, inicial una variable singular de nuestro arrglo en plurar.
for (var estudiante of estudiantes ) { 
        saludarEstudiantes(estudiante);
}