const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const Personaje = require('../models/personaje');
const sequelize = require('../config/database');
const specsQuery = require('../swagger/swaggerQuery');
require('dotenv').config();

class MicroservicioConsulta {
  constructor() {
    this.app = express();
    this.puerto = process.env.PUERTO_SERVIDOR_CONSULTA || 3001;
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
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specsQuery));
  }

  configurarRutas() {
    /**
     * @swagger
     * /consultar-personajes:
     *   get:
     *     summary: Obtener todos los personajes
     *     responses:
     *       200:
     *         description: Lista de personajes
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   id:
     *                     type: integer
     *                   nombre:
     *                     type: string
     *                   edad:
     *                     type: integer
     *                   altura:
     *                     type: number
     *                   constelacion:
     *                     type: string
     *                   urlImagen:
     *                     type: string
     *                   createdAt:
     *                     type: string
     *                     format: date-time
     *                   updatedAt:
     *                     type: string
     *                     format: date-time
     *       500:
     *         description: Error del servidor
     */
    this.app.get('/consultar-personajes', async (req, res) => {
      try {
        const personajes = await Personaje.findAll();
        res.status(200).json(personajes);
      } catch (error) {
        console.error('Error al consultar personajes:', error);
        res.status(500).json({ error: 'Error del servidor' });
      }
    });

    /**
     * @swagger
     * /consultar-personaje/{id}:
     *   get:
     *     summary: Obtener un personaje por ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID del personaje
     *     responses:
     *       200:
     *         description: Personaje encontrado
     *       404:
     *         description: Personaje no encontrado
     *       500:
     *         description: Error del servidor
     */
    this.app.get('/consultar-personaje/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const personaje = await Personaje.findByPk(id);
        if (!personaje) {
          return res.status(404).json({ error: 'Personaje no encontrado' });
        }
        res.status(200).json(personaje);
      } catch (error) {
        console.error('Error al consultar personaje:', error);
        res.status(500).json({ error: 'Error del servidor' });
      }
    });
  }

  async sincronizarBaseDatos() {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log('Base de datos sincronizada para consulta.');
    } catch (error) {
      console.error('Error al sincronizar la base de datos:', error);
    }
  }

  iniciarServidor() {
    this.app.listen(this.puerto, () => {
      console.log(`Microservicio de Consulta corriendo en http://localhost:${this.puerto}`);
      console.log(`Documentación Swagger en http://localhost:${this.puerto}/api-docs`);
    });
  }
}

// Instanciar y iniciar el microservicio
const microservicio = new MicroservicioConsulta();
microservicio.iniciarServidor();

module.exports = MicroservicioConsulta;
