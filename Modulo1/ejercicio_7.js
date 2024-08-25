var valores = [true, false, 2, "hola", "mundo", 3, "char"];
var cadenas = [];
var ordenados = [];
var numeros = [];
mayor = 0;
let cantCadenas = 0;

//PUNTO 1
for (let i = 0; i < valores.length; i++){
    
    if (valores[i].length > mayor){
        mayor = valores[i].length;
        var posicion = i;
        
    }
}
document.write(`El componente del array de mayor longitud es el ${posicion} y corresponde a '${valores[posicion]}' con ${valores[posicion].length} caracteres <br><br>`);

//PUNTO 2
document.write(`Voy a convertir todos los componentes del array a cadena para poder ordenarlos todos: <br>`)

for (let i = 0; i < valores.length; i++){
    cadenas[i] = valores[i].toString();
}

for (i = 0; i < cadenas.length; i++){ //ME FIJO SI FUNCIONO LA CONVERSION
    document.write(`valor " ${cadenas[i]} " y es de tipo: ${typeof cadenas[i]} <br>`);
  
}
// ahora que los tengo en string los voy a ordenar

cadenas.sort((a,b) => a.length - b.length);
document.write(`<br> Los elementos de texto ordenados por cantidad de caracteres quedarian asi: <br>`);
for (i = 0; i < valores.length; i++){
    document.write(`${cadenas[i]} <br>`);
}

document.write(`<br>`);

// AHORA LO HAGO PERO SOLO LOS STRING
for (i = 0; i < valores.length; i++){
    document.write(`Componentes dentro del array en posicion ${i} es de tipo: ${typeof valores[i]} <br>`); // IDENTIFICO LOS TIPOS
}
for (let i = 0; i < valores.length; i++){
    if (typeof valores[i] == 'string'){
        ordenados.push(valores[i]);
    } 
}
document.write(`<br>`);

ordenados.sort((a,b) => a.length - b.length); //ordeno por cantidad de caracteres.
ordenados.sort(); //ordeno alfabeticamente.
for (i = 0; i < ordenados.length; i++){
    document.write(`El array de cadenas queda asi: ${ordenados[i]} <br>`);
}

//Ahora voy a detectar los que son numeros y hacer las operaciones basicas matematicas.
let numeroArray = 0;
numeros = valores.filter(numeroArray => typeof numeroArray === 'number');
    document.write(`<br>`);
    document.write(`Los numeros encontrados en el array original son los siguientes: ${numeros} <br>`);

let suma = numeros[0] + numeros[1];
document.write(`El resultado de la suma de los dos numeros es: ${suma} <br>`);

let resta = numeros[0] - numeros[1];
document.write(`El resultado de la resta de los dos numeros es: ${resta} <br>`);

let multiplicacion = numeros[0] * numeros[1];
document.write(`El resultado de la multiplicacion de los dos numeros es: ${multiplicacion} <br>`);

let division = numeros[0] / numeros[1];
document.write(`El resultado de la division de los dos numeros es: ${division} <br>`);

let mensaje = prompt("Que operacion le gustaria realizar? (ingrese +, -, *, / )");

switch (mensaje){
    case "+":
            alert(`El resultado de la operacion es ${suma}`);
            break;
    case "-":
            alert(`El resultado de la resta es ${resta}`);
            break;
    case "*":
            alert(`El resultado de la multiplicacion es ${multiplicacion}`);
            break;
    case "/":
            alert(`El resultado de la division es ${division}`);
            break;
    default:
            alert("Esa operacion no puede realizarse");
            break;
}

