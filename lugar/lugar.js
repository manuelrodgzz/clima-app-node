const axios = require('axios');

const getLugarLatLon = async(dir) => {
    const encodedUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?appid=52fae1a1519f0e85ab6cfd7fcd5251af&units=metric&q=${encodedUrl}`
    });

    const resp = await instance.get()

    if (resp.cod === '404') throw new Error(`No se encontraron resultados para ${direccion}`)

    const data = resp.data
    const direccion = `${data.name}, ${data.sys.country}`
    const lat = data.coord.lat
    const lon = data.coord.lon


    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}