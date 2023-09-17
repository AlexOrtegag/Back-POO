//polimorfismo

function Persona(nombre){
    this.nombre = nombre;
    this.caminar = function(){
        console.log("caminado");
    }
}

function Alumno(nombre, lorrandoSangre){
    Persona.call(this, nombre);

    this.llorandoSangre = llorandoSangre;
    this.caminar = function(){
        console.log("CAMINANDO Y LLORANDO SANGRE")
    }
}

Alumno.prototype = Object.create(Persona.prototype);
Alumno.prototype.constructor = Alumno;

let estudiante1 = new Alumno('jesus guzman', "React");
let persona1 = new Persona("memo ochoa");

console.log(estudiante1.caminar());
console.log(persona1.caminar());
