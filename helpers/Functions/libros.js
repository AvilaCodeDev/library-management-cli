const { leerInput } = require("../inquirer");

const preguntasLibros = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Registrar Libro'
            },
            {
                value: '2',
                name: '2. Listar Libros'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
];

const registrarLibro = async( libros ) => {

    const nombre = await leerInput('Nombre: ');
    const genero = await leerInput('Genero: ');
    const autor = await leerInput('Autor: ');
    const editorial = await leerInput('Editorial: ');
    const fechaPublicacion = await leerInput('Fecha Publicación:');
    const numeroCopias = await leerInput('Numero de copias: ');

    libros.registrarLibro( nombre, genero, autor, editorial, fechaPublicacion, +numeroCopias);
}


module.exports = {
    preguntasLibros,
    registrarLibro
}