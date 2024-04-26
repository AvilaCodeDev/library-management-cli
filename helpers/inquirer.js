const inquirer = require("inquirer");
const { validate } = require("uuid");
const { Usuarios } = require("../models/Usuarios");

const headerMenu = () => {
    console.clear();
    console.log("========================");
    console.log("  Selecione una opción ");
    console.log("========================\n");
}

const inquirerMenu = async(preguntas) => {

    headerMenu();

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: 'Presiona enter para continuar'
        }
    ]
    await inquirer.prompt( question );
}

const leerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if( value.length === 0 ){
                    return 'Porfavor ingrese un mensaje';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt( question );
    return desc;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
}