const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const specsUnified = require('../swagger/swaggerUnified');
require('dotenv').config();

// Ejecutar seeder al iniciar el servidor (solo si no hay datos)
require('../seeders/seed');

class ServidorUnificado {
  constructor() {
    this.app = express();
    this.puerto = process.env.PUERTO_SERVIDOR_UNIFICADO || 3000;
    this.configurarMiddleware();
    this.configurarSwagger();
  }

  configurarMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  configurarSwagger() {
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specsUnified));
  }

  iniciarServidor() {
    this.app.listen(this.puerto, () => {
      console.log(`Servidor Unificado corriendo en http://localhost:${this.puerto}`);
      console.log(`Documentación Swagger Unificada en http://localhost:${this.puerto}/api-docs`);
    });
  }
}

// Instanciar y iniciar el servidor unificado
const servidorUnificado = new ServidorUnificado();
servidorUnificado.iniciarServidor();

module.exports = ServidorUnificado;
