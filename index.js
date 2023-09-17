let nombres = {/*nombres es un objeto en java script los objetos se crean en llaves */
    nombre: "jesus",/*dentro de las llaves van los atributos o caracteristicas del objeto */
    apellido : "Guzman"
};

console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("telefono"));//preguntamos si tiene la propiedad telefono el objeto nombre

function perro(nombre, edad){
    let perro = Object.create(ObjetoConstructor);//mandamos a crear el objeto constructor
    perro.nombre = nombre;
    perro.edad = edad;
    return perro;
}

let ObjetoConstructor ={
    habla: function(){
        return "Wof Wof soy un perro";
    }
}

let firulais = perro("firulais", 9);