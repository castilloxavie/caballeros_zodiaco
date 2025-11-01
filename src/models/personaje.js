const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Personaje extends Model {}

Personaje.init({
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  altura: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  constelacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  urlImagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Personaje',
  tableName: 'personajes',
  timestamps: true,
});

module.exports = Personaje;
