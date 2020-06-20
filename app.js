const { argv } = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');

// lugar.getLugarLatLon(argv.direccion)
//     .then(resp => console.log(resp))


const getInfo = async(direccion) => {

    const objLonLat = await lugar.getLugarLatLon(direccion);

    const temp = await clima.getClima(objLonLat.lon, objLonLat.lat)

    return {
        direccion: objLonLat.direccion,
        lat: objLonLat.lat,
        lon: objLonLat.lon,
        temp
    }
}

getInfo(argv.direccion)
    .then(objInfo => console.log(`El clima de ${objInfo.direccion.magenta} es de ${objInfo.temp}°C`))
    .catch(err => console.log('No se pudo determinar el clima de ' + argv.direccion.magenta, err));