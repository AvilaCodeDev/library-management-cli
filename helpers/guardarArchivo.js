const fs = require('fs');

const guardarDB = ( data, nombreArchivo ) => {
    const archivo = `./db/${nombreArchivo}.json`;
    fs.writeFileSync(archivo, JSON.stringify( data ));
}

const leerDB = (nombreArchivo) => {
    const archivo = `./db/${nombreArchivo}.json`;
    if( !fs.existsSync( archivo) ) return null;

    const info = fs.readFileSync( archivo, { encoding: 'utf-8'} );
    const data = JSON.parse( info );

    return data;
}

module.exports = {
    guardarDB,
    leerDB
}