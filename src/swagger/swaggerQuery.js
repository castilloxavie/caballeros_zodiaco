const swaggerJsdoc = require('swagger-jsdoc');

const opcionesSwaggerQuery = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Microservicio de Consulta - Caballeros del Zodiaco',
      version: '1.0.0',
      description: 'API para consultar personajes de Caballeros del Zodiaco',
    },
    servers: [
      {
        url: `https://caballeros-zodiaco.onrender.com`,
      },
    ],
  },
  apis: ['./src/servers/serverQuery.js'],
};

const specsQuery = swaggerJsdoc(opcionesSwaggerQuery);

module.exports = specsQuery;
