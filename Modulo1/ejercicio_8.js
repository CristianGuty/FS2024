/*Escribir un script que muestre la posición de la primera vocal de un texto introducido por teclado. Por 
ejemplo: perro = “e” es la letra Nº2; árbol = “a” es la letra Nº1 */

let mensaje = prompt("Escriba una frase u oracion que usted quiera")
let letra = prompt("Ahora escriba una letra y el sistema le dira en que posicion de la oracion estaba");
let posicion = mensaje.indexOf(letra);

if (posicion == -1){
    respuesta = alert("Esa letra no esta en la frase");
} else {
    respuesta = alert(`La ubicacion de la letra es la posicon N° ${posicion + 1}`);
} 

    

