//introduccion a orientacion objetos

let nombres = {/*nombres es un objeto en java script los objetos se crean en llaves */
    nombre: "jesus",/*dentro de las llaves van los atributos o caracteristicas del objeto */
    apellido : "Guzman"
};

console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("telefono"));//preguntamos si tiene la propiedad telefono el objeto nombre

function perro(nombre, edad){
    perro.nombre = nombre;
    perro.edad = edad;
}

perro.prototype.habla = function(){
    return "Wof Wof soy un perro";
}

let firulais = new perro("firulais", 9);