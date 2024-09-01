/*Crear un archivo con el nombre “ejercicio_12.js” que contenga el código JavaScript donde cree una
clase base y luego hereden de ella para crear una clase hija. La clase representará algo general, como un
vehículo, y la clase hija podría ser un tipo específico de vehículo, como un automóvil. En este ejercicio
deberán realizar los siguientes pasos
 Definir una clase base Vehiculo con tres atributos (marca, modelo y año) y una función
(obtenerInformacion) para mostrar información del vehículo.
 Crear una clase hija Automovil que hereda de Vehiculo y añadir dos nuevos atributos (color y precio).
También se sobrescribe el método obtenerInformacion para incluir la información específica del
automóvil.
 Crear instancias de ambas clases y mostrar la información en la consola del navegador.*/


class Instrumento {
    nombre;
    tipo;
    material;
 // LOS INSTRUMENTOS PUEDEN SER IDIOFONOS (XILOFON), MEMBRAFONOS (BATERIA), CORDOFONOS (PIANO, GUITARRA) O AEROFONOS (SAXO, TROMBON)

    constructor (nombre, tipo, material) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.material = material;

    }
    
    descripcion (){
        return `Este es el intrumento ${this.nombre}, su genero orquestral es ${this.tipo} y su material de construccion dominante es ${this.material}.`;
    }
};
    //vamos a instanciar la clase un poco:

    var instCordo1 = new Instrumento('guitarra','cordofono','madera');
    var instCordo2 = new Instrumento('piano','cordofono','madera');
    var instIdio1 = new Instrumento('xilofon','idiofono','metal');
    var instMembra1 = new Instrumento('bateria','membrafono','madera');
    var instMembra2 = new Instrumento('timbales','membrafono','metal');
    var instAero1 = new Instrumento('trombon','aerofono','metal');

    instCordo1.descripcion();
    instAero1.descripcion();

    class Guitarras extends Instrumento {
        marca;
        cant_cuerdas;
       
        constructor(nombre,tipo,material,marca,cant_cuerdas){
            super(nombre,tipo,material);
            this.marca = marca;
            this.cant_cuerdas = cant_cuerdas;
        }
        
        //descripcion() {
            //return super.descripcion() + "(Guitarras)"; //no entendi como usar este metodo.
        //}

        atribGuitarras(){
            console.log(super.descripcion() + ` El fabricante es ${this.marca} y la cantidad de cuerdas ${this.cant_cuerdas}.`);
           
         }
    }
        var Stratocaster = new Guitarras('guitarra','cordofono','madera','Fender',6);
        var LesPaul = new Guitarras('guitarra','cordofono','madera','Gibson',6);

        LesPaul.atribGuitarras();
        Stratocaster.atribGuitarras();
        //LesPaul.descripcion();