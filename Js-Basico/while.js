var estudiantes  = ["Maria","Sergio","Missael", "Maileny"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
//Genera una variable 
while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}