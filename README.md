# Microservicios Caballeros del Zodiaco

Conjunto de microservicios para consultar e insertar datos de personajes de Caballeros del Zodiaco en una base de datos relacional.

## Características

- **Base de datos**: MySQL (compatible con Railway y otros servicios cloud)
- **Mínimo 12 personajes**: Incluye 13 personajes sembrados
- **Campos**: nombre, edad, altura, constelación, URL de imagen
- **Microservicios**:
  - Consulta (puerto 3001)
  - Inserción (puerto 3002)
- **Documentación**: Swagger integrada
- **POO**: Implementado con clases en JavaScript
- **Idioma**: Español

## Instalación

1. Clona el repositorio
2. Instala dependencias:
   ```bash
   npm install
   ```

3. Configura la base de datos MySQL:
   - Crea una base de datos llamada `caballeros_zodiaco`
   - Copia `.env.example` a `.env` y configura tus credenciales MySQL

4. Siembra la base de datos con personajes iniciales:
   ```bash
   npm run seed
   ```

## Uso

### Iniciar microservicios

- **Servidor Unificado (Documentación Swagger)**:
  ```bash
  npm run start:unificado
  ```
  - URL: http://localhost:3000
  - Documentación: http://localhost:3000/api-docs (panel único con todos los endpoints)

- **Microservicio de Consulta**:
  ```bash
  npm run start:consulta
  ```
  - URL: http://localhost:3001
  - Documentación: http://localhost:3001/api-docs

- **Microservicio de Inserción**:
  ```bash
  npm run start:insercion
  ```
  - URL: http://localhost:3002
  - Documentación: http://localhost:3002/api-docs

### Endpoints para Postman

#### Consulta
- **GET** `http://localhost:3001/consultar-personajes`: Obtener todos los personajes
- **GET** `http://localhost:3001/consultar-personaje/{id}`: Obtener personaje por ID (reemplaza {id} con un número, e.g., 1)

#### Inserción
- **POST** `http://localhost:3002/insertar-personaje`
  - Headers: `Content-Type: application/json`
  - Body (raw JSON):
    ```json
    {
      "nombre": "Ejemplo",
      "edad": 20,
      "altura": 1.80,
      "constelacion": "Ejemplo",
      "urlImagen": "https://example.com/ejemplo.jpg"
    }
    ```

## Despliegue Online

Para desplegar online (e.g., en Heroku, Railway, etc.):

1. Cambia la configuración de base de datos a un servicio relacional como PostgreSQL o MySQL.
2. Actualiza las variables de entorno para producción.
3. Despliega cada microservicio por separado o en contenedores Docker.

## Tecnologías

- Node.js
- Express
- Sequelize
- MySQL (producción)
- Swagger (documentación)
