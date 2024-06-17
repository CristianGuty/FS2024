var valores = [true, false, 2, "hola", "mundo", 3, "char"];
var cadenas = [];
var ordenados = [];
mayor = 0;
let cantCadenas = 0;

for (let i = 0; i < valores.length; i++){
    
    if (valores[i].length > mayor){
        mayor = valores[i].length;
        var posicion = i;
        
    }
}
document.write(`El componente del array de mayor longitud es el ${posicion} y corresponde a '${valores[posicion]}' con ${valores[posicion].length} caracteres <br>`);



for (let i = 0; i < valores.length; i++){
    if (typeof valores[i] == "string"){
        //cantCadenas ++;
       let cadenaEliminada = valores.splice(i,1);
       valores.push(cadenaEliminada);
       //i--;
    }
}
//console.log(cantCadenas);

for (i = 0; i < valores.length; i++){
    document.write(`${valores[i]} <br>`);
}





for (let i = 0; i < valores.length; i++){
    cadenas[i] = valores[i].toString();
}
//for (i = 0; i < valores.length; i++){
//   document.write(`${cadenas[i]} <br>`);
//  
//}
for (i = 0; i < cadenas.length; i++){
    document.write(`${typeof cadenas[i]} <br>`);
  
}
// ahora que los tengo en string los voy a ordenar

cadenas.sort((a,b) => a.length - b.length);
document.write(`"Los elementos de texto ordenados por cantidad de caracteres quedarian asi:" <br>`);
for (i = 0; i < valores.length; i++){
    document.write(`${cadenas[i]} <br>`);
  
}