const express = require('express')
const axios = require('axios');

const app = express();

function hacerPeticion() {
  axios.get('https://www.sharpods.com/wp-json/woofunnels/v1/worker')
    .then(response => {
      console.log('Respuesta recibida:', response.data);
    })
    .catch(error => {
      console.error('Error al realizar la solicitud:', error);
    });

    axios.get('https://sensualab.com/wp-json/woofunnels/v1/worker')
    .then(response => {
      console.log('Respuesta recibida:', response.data);
    })
    .catch(error => {
      console.error('Error al realizar la solicitud:', error);
    });
}

hacerPeticion();

setInterval(hacerPeticion, 20000);

app.listen(8000, () => {
  console.log("escichando");
})