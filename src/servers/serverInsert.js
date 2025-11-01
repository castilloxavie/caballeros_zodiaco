const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const Personaje = require('../models/personaje');
const sequelize = require('../config/database');
const specsInsert = require('../swagger/swaggerInsert');
require('dotenv').config();

class MicroservicioInsercion {
  constructor() {
    this.app = express();
    this.puerto = process.env.PUERTO_SERVIDOR_INSERCION || 3002;
    this.configurarMiddleware();
    this.configurarSwagger();
    this.configurarRutas();
    this.sincronizarBaseDatos();
  }

  configurarMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  configurarSwagger() {
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specsInsert));
  }

  configurarRutas() {
    /**
     * @swagger
     * /insertar-personaje:
     *   post:
     *     summary: Insertar un nuevo personaje
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               nombre:
     *                 type: string
     *               edad:
     *                 type: integer
     *               altura:
     *                 type: number
     *               constelacion:
     *                 type: string
     *               urlImagen:
     *                 type: string
     *             required:
     *               - nombre
     *               - edad
     *               - altura
     *               - constelacion
     *               - urlImagen
     *     responses:
     *       201:
     *         description: Personaje insertado exitosamente
     *       400:
     *         description: Datos inválidos
     *       500:
     *         description: Error del servidor
     */
    this.app.post('/insertar-personaje', async (req, res) => {
      try {
        const { nombre, edad, altura, constelacion, urlImagen } = req.body;
        if (!nombre || !edad || !altura || !constelacion || !urlImagen) {
          return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }
        const nuevoPersonaje = await Personaje.create({
          nombre,
          edad,
          altura,
          constelacion,
          urlImagen,
        });
        res.status(201).json({ mensaje: 'Personaje insertado exitosamente', personaje: nuevoPersonaje });
      } catch (error) {
        console.error('Error al insertar personaje:', error);
        res.status(500).json({ error: 'Error del servidor' });
      }
    });
  }

  async sincronizarBaseDatos() {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log('Base de datos sincronizada para inserción.');
    } catch (error) {
      console.error('Error al sincronizar la base de datos:', error);
    }
  }

  iniciarServidor() {
    this.app.listen(this.puerto, () => {
      console.log(`Microservicio de Inserción corriendo en http://localhost:${this.puerto}`);
      console.log(`Documentación Swagger en http://localhost:${this.puerto}/api-docs`);
    });
  }
}

// Instanciar y iniciar el microservicio
const microservicio = new MicroservicioInsercion();
microservicio.iniciarServidor();

module.exports = MicroservicioInsercion;
