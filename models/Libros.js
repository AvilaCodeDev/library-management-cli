const { Libro } = require("./Libro");

class Libros {
    _listado = {};

    get listadoArr() {
        const listado = [];

        Object.keys( this._listado).forEach( key => {
            const libro = this._listado[ key ];
            listado.push( libro );
        })
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    registrarLibro(nombre, genero, autor, editorial, fechaPublicacion, numeroCopias ){
        const libro = new Libro( nombre, genero, autor, editorial, fechaPublicacion, numeroCopias);

        this._listado[ libro.id ] = libro;
    }

    cargarLibrosdelArray( libros = [] ){
        libros.forEach( libro => {
            this._listado[ libro.id ] = libro;
        });
    }

    listadoLibrosCompleto(){
        console.log('\n-----------------------------------\n');
        this.listadoArr.forEach( libro => {
            console.log(`${'Nombre:'.green} ${libro.nombre}`);
            console.log(`${'Genero:'.green} ${libro.genero}`);
            console.log(`${'Autor:'.green} ${libro.autor}`);
            console.log(`${'Editorial:'.green} ${libro.editorial}`);
            console.log(`${'Fecha de publicación:'.green} ${libro.fechaPublicacion}`);
            console.log(`${'Numero de copias:'.green} ${libro.numeroCopias}`);
            console.log('\n-----------------------------------\n');
        });
    }
}

module.exports = {
    Libros
}