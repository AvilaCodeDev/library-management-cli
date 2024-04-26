const { v4: uuidv4 } = require('uuid');

class Libro{
    id = '';
    nombre = '';
    genero = '';
    autor = '';
    editorial = '';
    fechaPublicacion = '';
    numeroCopias = 0;

    constructor(nombre, genero, autor, editorial, fechaPublicacion, numeroCopias = 1){
        this.id = uuidv4();
        this.nombre = nombre;
        this.genero = genero;
        this.autor = autor;
        this.editorial = editorial;
        this.fechaPublicacion = fechaPublicacion;
        this.numeroCopias = numeroCopias;
    }
}

module.exports = {
    Libro
}