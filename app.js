const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const { menuUsuarios, menuLibros } = require("./helpers/menus");
const { Libros } = require("./models/Libros");
const { Usuarios } = require("./models/Usuarios");

const preguntas= [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Usuarios'
            },
            {
                value: '2',
                name: '2.Libros'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]


const main = async() => {
 let opt = '';
 const usuarios = new Usuarios();
 const libros = new Libros();

 do {
    opt = await inquirerMenu( preguntas );
    
    switch (opt) {
        case '1':
            await menuUsuarios( usuarios )
        break;
        
        case '2':
            await menuLibros( libros );
        break;
    
        case '0':
            await pausa();
        break;
    }

 } while ( opt !== '0' ) ;
}

main();