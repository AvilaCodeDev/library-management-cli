const { preguntasLibros, registrarLibro } = require("./Functions/libros");
const { registrarUsuario, preguntasUsuarios, buscarUsuario } = require("./Functions/usuarios");
const { guardarDB, leerDB } = require("./guardarArchivo");
const {  inquirerMenu, pausa } = require("./inquirer");

 const menuUsuarios = async( usuarios ) => {
    console.clear();

    let optUsuarios = '';
    const usuariosArchivo = 'dataUsuarios';

    const usuariosDB = leerDB(usuariosArchivo);

    if( usuariosDB ){
        usuarios.cargarUsuariosdelArray(usuariosDB);
    }

    do {
        optUsuarios = await inquirerMenu( preguntasUsuarios );

        switch (optUsuarios) {
            case '1':
                await registrarUsuario( usuarios );
            break;

            case '2':
                usuarios.listadoUsuariosCompleto();
            break;

            case '3':
                const usuarioEncontrado = await buscarUsuario( usuarios );
                if( usuarioEncontrado.length > 0) usuarios.listadoUsuariosCompleto( usuarioEncontrado );
            break;
        
            default:
                break;
        }

        guardarDB( usuarios.listadoArr, usuariosArchivo );
        await pausa();
    } while ( optUsuarios !== '0' );
 }

 const menuLibros = async( libros ) => {
    console.clear();

    let optLibros = '';
    const librosArchivo = 'dataLibros'

    const librosDB = leerDB(librosArchivo);

    if( librosDB ){
        libros.cargarLibrosdelArray(librosDB);
    }

    do {
        optLibros = await inquirerMenu( preguntasLibros );

        switch (optLibros) {
            case '1':
                await registrarLibro( libros );
            break;

            case '2':
                libros.listadoLibrosCompleto();
            break;
        
            default:
                break;
        }

        guardarDB( libros.listadoArr, librosArchivo );
        await pausa();
    } while ( optLibros !== '0' );
 }


 module.exports = {
    menuUsuarios,
    menuLibros
 }