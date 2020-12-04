const axios = require('axios');

const apiKey = '21b5918da5d9f645be6ebcc4e67937ff'
const getClima = async(ciudad) => {
    try {
        const ciudadURI = encodeURI(ciudad);
        const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadURI}&appid=${apiKey}`);
        return respuesta.data.main.temp;
    } catch (error) {
        if (error) {
            throw new Error(`Error en obtener la temperatura de: ${ciudad}`);
        }
    }
}

module.exports = {
    getClima
}