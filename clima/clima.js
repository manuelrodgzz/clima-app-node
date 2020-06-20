const axios = require('axios');


const getClima = async(lon, lat) => {

    const resp = await axios
        .get(`https://api.openweathermap.org/data/2.5/weather?appid=52fae1a1519f0e85ab6cfd7fcd5251af&units=metric&` +
            `lon=${lon}&lat=${lat}`)

    if (resp.cod === '404') throw new Error(`No se pudo encontrar la temperatura para lat: ${lat}, lon: ${lon}`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}