//herencias

class Animales{
    constructor(nombre ,edad){
        this.nombre = nombre;
        this.especie = edad;
    }

    canta(){
        return`${this.nombre} puede cantar`;
    }

    correr(){
        return`${this.nombre} puede correr`;
    }

}
/*
let gato = new Animales("gato", "felis catus");
console.log(gato.canta());
console.log(gato.correr());
 */

class gatos extends Animales{
    constructor(nombre, edad, colorBigotes){
        super(nombre, edad);
        this.colorBigotes = colorBigotes;
    }
    bigotes(){
        return`tengo bigotes color ${this.colorBigotes}`;
    }
    anios(){
        return`tengo ${this.edad} anios`
    }
}

//let animal = new Animales("gato", 5);
let gato = new gatos("gato",5 ,"blanco");
console.log(gato.canta());
console.log(gato.correr());
console.log(gato.bigotes());
console.log(gato.anios());
console.log(gato);