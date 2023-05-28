const express = require('express');
const { ExpressAdapter } = require('ask-sdk-express-adapter');
const Alexa = require('ask-sdk-core');

const app = express();

// Define la ruta de entrada para las solicitudes de Alexa
app.post('/alexa', express.json(), (req, res) => {
  const skill = Alexa.SkillBuilders.custom()
    .addRequestHandlers({
      sexoIntentHandler: {
        canHandle(handlerInput) {
          return (
            Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'sexoIntent'
          );
        },
        handle(handlerInput) {
          // Acción a realizar cuando se activa la intención "EncenderLuces"
          const speechText = 'hay sexo en expres';
          return handlerInput.responseBuilder.speak(speechText).getResponse();
        },
      },
    })
    .create();

  const adapter = new ExpressAdapter(skill, req, res);
  adapter.execute();
});

// Inicia el servidor Express
app.listen(3000, () => {
  console.log('Servidor Express en ejecución en el puerto 3000');
});
