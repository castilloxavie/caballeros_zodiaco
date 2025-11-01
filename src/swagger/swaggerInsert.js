const swaggerJsdoc = require('swagger-jsdoc');

const opcionesSwaggerInsert = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Microservicio de Inserción - Caballeros del Zodiaco',
      version: '1.0.0',
      description: 'API para insertar personajes de Caballeros del Zodiaco',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PUERTO_SERVIDOR_INSERCION || 3002}`,
      },
    ],
  },
  apis: ['./src/servers/serverInsert.js'],
};

const specsInsert = swaggerJsdoc(opcionesSwaggerInsert);

module.exports = specsInsert;
