var mes = 0;
mes = prompt('Elija un numero equivalente al mes del año que usted quiera:');

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

while ((mes != 1) && (mes != 2) && (mes != 3) && (mes != 4) && (mes != 5) && (mes != 6) && (mes != 7) && (mes != 8) && (mes != 9) && (mes != 10) && (mes != 11) && (mes != 12)) {

    alert("ese numero no es ningun mes");
    //mes = null
    console.log(mes);
    mes = prompt('Elija un numero equivalente al mes del año que usted quiera:');
}
//document.write(mes);
document.write(`El mes elegido es ${meses[mes = (mes-1)]}`);
alert(`El mes elegido es ${meses[mes]}`);