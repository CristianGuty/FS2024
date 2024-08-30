/*Crear un programa que recibe 5 (cinco) notas de un alumno, las mismas deben ser ingresadas por el 
usuario y ser naturales < 11. Debe calcular el promedio e imprimir en pantalla si el valor de media es < 5 
“Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente*/

let notas = [];
let respuesta = Boolean;
let bandera = 0;

respuesta = (confirm("Escriba las 5 notas del alumno por favor:"));
if (respuesta == true) {
    for (i=0; i<5; i++) {
        notas[i] = prompt(`Escriba la nota numero ${i+1} del alumno.`);
            if (notas[i] === null){ // si al ingresar la nota presiono cancelar, salgo del programa.
                alert("Muchas gracias por usar este programa :D")
                i = 4; //salgo del for.
                bandera = 1; //Para evitar todo el bloque de codigo de sacar promedio y que termine mi programa automaticamente.
            }else {    
                while (notas[i] < 1 || notas[i] > 10 || (isNaN(notas[i]))){ //filtramos que solo pueda ingresar numeros del 1 al 10.
                alert("Ese numero no puede ser ingresado, por favor digite un numero del 1 - 10");
                notas[i] = prompt(`Escriba la nota numero ${i+1} del alumno.`);
                }
            } 
    }

    if (bandera == 0){ //si ingrese correctamente los 5 numeros calculo el promedio.
        let arrayDeNumeros = notas.map(Number); //transformo el array a valores numericos.
            
        function calcularPromedio(notas) { //hago una funcion que acumule los numeros del array automaticamente sin hacer un for y luego q calcule el promedio de todos los numeros ingresados.
        let suma = arrayDeNumeros.reduce((acumulador, valorActual) => acumulador + valorActual);
        return suma / arrayDeNumeros.length;
        }
            alert(`Usted ingreso las siguientes notas: ${arrayDeNumeros}`); // a modo de control si las notas que ingrese estan bien.
            let promedio = calcularPromedio(arrayDeNumeros);
            //alert(`El promedio de notas del alumno es ${promedio}`);
            switch (true) {
                case (promedio < 5):
                    alert(`El promedio del alumno fue ${promedio} y lamentablemente está Reprobado.`);
                    break;
                case (promedio >= 6 && promedio <= 8):
                    alert(`El promedio del alumno fue ${promedio} y está felizmente aprobado!`);
                    break;
                case (promedio > 8 && promedio <= 10):
                    alert(`El promedio del alumno fue ${promedio} y tuvo un desempeño sobresaliente!!`);
                    break;
                default: //no entendi xq pense q era un error de tipeo tuyo cuando pedias < 5 y luego > a 6, x eso yo directamente puse reprobado < 6. Lo corrijo como vos pediste.
                    alert(`El promedio del alumno fue ${promedio}, por favor hablar con el profesor para una posibilidad de salir de condicional.`)
            }

    }
} else {
    alert("buenas tardes");
}