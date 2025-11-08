const swaggerJsdoc = require('swagger-jsdoc');

const opcionesSwaggerUnified = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Microservicios Caballeros del Zodiaco - Documentación Unificada',
      version: '1.0.0',
      description: 'Documentación completa de los microservicios de consulta e inserción de personajes de Caballeros del Zodiaco',
    },
    servers: [
      {
        url: 'https://caballeros-zodiaco.onrender.com',
        description: 'Microservicio de Consulta',
      },
      {
        url: 'https://caballeros-zodiaco-insertar.onrender.com',
        description: 'Microservicio de Inserción',
      },
    ],
  },
  apis: ['./src/servers/serverQuery.js', './src/servers/serverInsert.js'],
};

const specsUnified = swaggerJsdoc(opcionesSwaggerUnified);

module.exports = specsUnified;
