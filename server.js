const express = require('express');
const { ExpressAdapter } = require('ask-sdk-express-adapter');
const Alexa = require('ask-sdk-core');

const app = express();

// Define la ruta de entrada para las solicitudes de Alexa
app.post('/alexa', express.json(), (req, res) => {
  const skill = Alexa.SkillBuilders.custom()
    .addRequestHandlers(/* Manejadores de solicitudes de Alexa */)
    .create();

  const adapter = new ExpressAdapter(skill, req, res);
  adapter.execute();
});

// Inicia el servidor Express
app.listen(3000, () => {
  console.log('Servidor Express en ejecución en el puerto 3000');
});
