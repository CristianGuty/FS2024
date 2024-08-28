/*Crear un programa que recibe 5 (cinco) notas de un alumno, las mismas deben ser ingresadas por el 
usuario y ser naturales < 11. Debe calcular el promedio e imprimir en pantalla si el valor de media es < 5 
“Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente*/

let alerta = "";
let notas = [4];
let promedio = null;
let respuesta;

respuesta = confirm("Escriba las 5 notas del alumno por favor:");
if (respuesta) {
    for (i=0; i<5; i++) {
        notas[i] = promt(`Escriba la nota numero ${i+1} del alumno.`);
        while (notas[i] < 1 || notas[i] > 10){
        alerta = alert("Ese numero no puede ser ingresado, por favor digite un numero del 1 - 10");
        notas[i] = prompt("Escriba una nota del 1 al 10 por favor");
        }
    }
} else {
        alert("buenas tardes");
    }


    function calcularPromedio(notas) {
    const suma = notas.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return suma / notas.lengt;
}

promedio = calcularPromedio(notas);
alert(`El promedio de notas del alumno es ${promedio}`);
