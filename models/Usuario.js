const { v4: uuidv4 } = require('uuid');

class Usuario {
    id = '';
    nombre = '';
    apPaterno = '';
    apMaterno = '';
    direccion = ''; 
    fechaNacimiento = '';

    constructor( nombre, apPaterno, apMaterno, direccion, fechaNacimiento ) {

        this.id = uuidv4();
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno = apMaterno;
        this.direccion = direccion;
        this.fechaNacimiento = fechaNacimiento;

    }
}

module.exports = {
    Usuario
}