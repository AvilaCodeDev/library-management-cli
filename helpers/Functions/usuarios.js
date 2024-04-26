const { leerInput } = require("../inquirer")

const preguntasUsuarios = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Registrar Usuario'
            },
            {
                value: '2',
                name: '2. Listar Usuarios'
            },
            {
                value: '3',
                name: '3. Buscar Usuario'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]

const registrarUsuario = async( usuarios ) => {
    const nombre = await leerInput('Nombre: ');
    const apPaterno = await leerInput('Apellido Paterno: ');
    const apMaterno = await leerInput('Apellido Materno: ');
    const direccion = await leerInput('Direccion: ');
    const fechaNacimiento = await leerInput('Fecha de Nacimiento: ');

    usuarios.registrarUsuario(nombre, apPaterno, apMaterno,direccion, fechaNacimiento);
}

const buscarUsuario = async( usuarios ) => {
    const nombreBuscar = await leerInput("Ingrese el nombre del usuario que desea buscar: ");
    const usuarioEncontrado = usuarios.buscarUsuario( nombreBuscar );

    return usuarioEncontrado;
}

module.exports = {
    registrarUsuario,
    buscarUsuario,
    preguntasUsuarios
}