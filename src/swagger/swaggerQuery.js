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
        url: `http://localhost:${process.env.PUERTO_SERVIDOR_CONSULTA || 3001}`,
      },
    ],
  },
  apis: ['./src/servers/serverQuery.js'],
};

const specsQuery = swaggerJsdoc(opcionesSwaggerQuery);

module.exports = specsQuery;
