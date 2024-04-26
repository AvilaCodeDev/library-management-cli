const { resolve } = require('path');

const mostrarMenu = () => {

    return new Promise( resolve => {
    // console.clear();

    console.log("========================");
    console.log("  Selecione una opción ");
    console.log("========================\n");

    console.log("1. Registrar Usuario");
    console.log("2. Registrar Libro");
    console.log("3. Realizar Prestamo");
    console.log("4. Devolver Libro");
    console.log("5. Verificar Disponibilidad");
    console.log("0. Salir");
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Seleccione una opcion: ', (opt) => {
        readline.close();
        resolve(opt);
    });
    })
}

const pausa = () => {
    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Presione enter para continuar', (opt) => {
            readline.close();
            resolve();
        });
    })
}

module.exports = {
    mostrarMenu,
    pausa

}