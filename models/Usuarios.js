const colors = require('colors');

const { Usuario } = require("./Usuario");

class Usuarios {
    _listado = {};

    get listadoArr() {
        const listado = [];

        Object.keys( this._listado).forEach( key => {
            const usuario = this._listado[ key ];
            listado.push( usuario );
        })
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    cargarUsuariosdelArray( usuarios = [] ){

        usuarios.forEach( usuario => {
            this._listado[usuario.id] = usuario;
        });

    }

    registrarUsuario( nombre, apPaterno, apMaterno, direccion, fechaNacimiento ){
        const usuario = new Usuario( nombre, apPaterno, apMaterno, direccion, fechaNacimiento );

        this._listado[ usuario.id ] = usuario;

    }

    listadoUsuariosCompleto( arregloUsuarios = []) {
        if( arregloUsuarios.length == 0 ){
            arregloUsuarios = this.listadoArr;
        }
        console.log('\n-----------------------------------\n');
        arregloUsuarios.forEach( usuario => {
            console.log(`${'Nombre completo:'.green} ${usuario.nombre} ${usuario.apPaterno} ${usuario.apMaterno}`);
            console.log(`${'Direccion:'.green} ${usuario.direccion}`);
            console.log(`${'Fecha de nacimiento:'.green} ${usuario.fechaNacimiento}`);
            console.log('\n-----------------------------------\n');
        });
    }

    buscarUsuario( usuarioBuscar ){
        let i;
        const resultados = [];
        for( i = 0; i < this.listadoArr.length; i++ ){
            if( usuarioBuscar === this.listadoArr[i].nombre ){
                resultados.push(this.listadoArr[i]);
            }
        }
        return resultados;

    }
}

module.exports = {
    Usuarios
}