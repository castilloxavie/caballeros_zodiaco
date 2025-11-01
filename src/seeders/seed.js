const Personaje = require('../models/personaje');
const sequelize = require('../config/database');

const personajes = [
  {
    nombre: 'Seiya',
    edad: 18,
    altura: 1.65,
    constelacion: 'Pegaso',
    urlImagen: 'https://codigoespagueti.com/noticias/anime/saint-seiya-por-que-hay-dos-armaduras-de-sagitario/',
  },
  {
    nombre: 'Shiryu',
    edad: 18,
    altura: 1.70,
    constelacion: 'Dragón',
    urlImagen: 'https://www.instagram.com/p/CJ1sL30lG6g/',
  },
  {
    nombre: 'Hyoga',
    edad: 18,
    altura: 1.68,
    constelacion: 'Cisne',
    urlImagen: 'https://codigoespagueti.com/noticias/anime/saint-seiya-hyoga-de-cisne-cobra-vida-en-impresionante-cosplay-femenino/',
  },
  {
    nombre: 'Shun',
    edad: 17,
    altura: 1.62,
    constelacion: 'Andrómeda',
    urlImagen: 'https://caballeros-del-zodiaco.fandom.com/es/wiki/Shun',
  },
  {
    nombre: 'Ikki',
    edad: 19,
    altura: 1.75,
    constelacion: 'Fénix',
    urlImagen: 'https://saintseiya.fandom.com/es/wiki/Ikki_de_Phoenix',
  },
  {
    nombre: 'Aioria',
    edad: 20,
    altura: 1.80,
    constelacion: 'Leo',
    urlImagen: 'https://caballeros-del-zodiaco.fandom.com/es/wiki/Aioria',
  },
  {
    nombre: 'Aioros',
    edad: 22,
    altura: 1.82,
    constelacion: 'Sagitario',
    urlImagen: 'https://aminoapps.com/c/saint-seiya-animo/page/item/aioros-de-sagitario/1JJ3_Zl5TrI0Jpa65rm52aB6b48bXD5mxWV',
  },
  {
    nombre: 'Camus',
    edad: 21,
    altura: 1.78,
    constelacion: 'Acuario',
    urlImagen: 'https://www.instagram.com/p/CGtLdyflnmN/',
  },
  {
    nombre: 'Milo',
    edad: 20,
    altura: 1.76,
    constelacion: 'Escorpión',
    urlImagen: 'https://saintseiya.fandom.com/es/wiki/Milo_de_Scorpio',
  },
  {
    nombre: 'Aldebaran',
    edad: 23,
    altura: 2.10,
    constelacion: 'Tauro',
    urlImagen: 'https://saintseiya.fandom.com/es/wiki/Aldebaran_de_Taurus',
  },
  {
    nombre: 'Saga',
    edad: 25,
    altura: 1.85,
    constelacion: 'Géminis',
    urlImagen: 'https://www.espinof.com/listas/caballeros-zodiaco-como-seguir-todo-anime-saint-seiya-orden-cronologico-que-se-puede-ver-streaming',
  },
  {
    nombre: 'Shaka',
    edad: 24,
    altura: 1.88,
    constelacion: 'Virgo',
    urlImagen: 'https://saintseiya.fandom.com/es/wiki/Cloth_de_Virgo',
  },
  {
    nombre: 'Dohko',
    edad: 243,
    altura: 1.70,
    constelacion: 'Libra',
    urlImagen: 'https://saintseiya.fandom.com/es/wiki/Dohko_de_Libra',
  },
];

async function sembrarPersonajes() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true }); // Esto borra y recrea las tablas
    await Personaje.bulkCreate(personajes);
    console.log('Personajes sembrados exitosamente.');
  } catch (error) {
    console.error('Error al sembrar personajes:', error);
  } finally {
    await sequelize.close();
  }
}

sembrarPersonajes();
