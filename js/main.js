let anioActual = 2023;
let anioNacimiento = 1996;
let edad = anioActual - anioNacimiento;




let nombre = prompt("Panita, antes de agendar un turno ingrese su nombre");
let apellido = prompt("Disculpe, hay varios" + " " + nombre + " " + "en esta peluqueria, ingrese su apellido")


let nombreCompleto = (nombre + " " + apellido);


const saludar = () => console.log("Hola " + nombreCompleto);
saludar();

let diaturno = prompt("¿Que dia te gustaria venir?")
if (diaturno == "lunes", "martes", "miercoles", "jueves", "viernes", "sabado") {
    prompt("perfecto, seleccione el horario, recorda que estamos desde las 10am hasta las 20pm")
    
} if (diaturno == "domingo") {
    alert("Los domingos no trabajamos")
    
}
