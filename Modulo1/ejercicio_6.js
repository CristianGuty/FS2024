var mes = 0;
mes = prompt('Elija un numero equivalente al mes del año que usted quiera:');

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

while ((mes < 0) && (mes > 12))  {

    alert("ese numero no es ningun mes");
    //mes = null
    console.log(mes);
    mes = prompt('Elija un numero equivalente al mes del año que usted quiera:');
}
//document.write(mes);
document.write(`El mes elegido es ${meses[mes = (mes-1)]}`);
alert(`El mes elegido es ${meses[mes]}`);