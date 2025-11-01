const fs = require('fs');
const path = require('path');

const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enlaces Postman - Microservicios Caballeros del Zodiaco</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        h1 { color: #333; }
        h2 { color: #666; }
        .endpoint { margin: 20px 0; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
        .method { font-weight: bold; color: #007bff; }
        .url { font-family: monospace; background: #f8f9fa; padding: 5px; border-radius: 3px; }
        .body { background: #f8f9fa; padding: 10px; border-radius: 3px; font-family: monospace; white-space: pre-wrap; }
        .note { background: #fff3cd; padding: 10px; border-radius: 3px; border-left: 4px solid #ffc107; }
    </style>
</head>
<body>
    <h1>Enlaces para Probar los Microservicios con Postman</h1>
    <p>Proyecto: Microservicios Caballeros del Zodiaco</p>

    <div class="endpoint">
        <h2><span class="method">GET</span> - Obtener todos los personajes</h2>
        <p><strong>URL:</strong> <span class="url">http://localhost:3001/consultar-personajes</span></p>
        <p>Descripción: Retorna una lista de todos los personajes almacenados en la base de datos.</p>
    </div>

    <div class="endpoint">
        <h2><span class="method">GET</span> - Obtener un personaje por ID</h2>
        <p><strong>URL:</strong> <span class="url">http://localhost:3001/consultar-personaje/{id}</span></p>
        <p>Descripción: Retorna un personaje específico por su ID. Reemplaza {id} con el número del personaje.</p>
        <p><strong>Ejemplo:</strong> <span class="url">http://localhost:3001/consultar-personaje/1</span></p>
    </div>

    <div class="endpoint">
        <h2><span class="method">POST</span> - Insertar un nuevo personaje</h2>
        <p><strong>URL:</strong> <span class="url">http://localhost:3002/insertar-personaje</span></p>
        <p><strong>Headers:</strong> Content-Type: application/json</p>
        <p><strong>Body (JSON):</strong></p>
        <div class="body">{
  "nombre": "Nuevo Personaje",
  "edad": 20,
  "altura": 1.8,
  "constelacion": "Nueva Constelación",
  "urlImagen": "https://ejemplo.com/imagen.jpg"
}</div>
        <p>Descripción: Inserta un nuevo personaje en la base de datos. Todos los campos son obligatorios.</p>
    </div>

    <div class="endpoint">
        <h2><span class="method">GET</span> - Documentación Swagger Unificada</h2>
        <p><strong>URL:</strong> <span class="url">http://localhost:3000/api-docs</span></p>
        <p>Descripción: Interfaz Swagger para visualizar y probar todos los endpoints de los microservicios.</p>
    </div>

    <div class="note">
        <strong>Nota importante:</strong> Los servidores deben estar corriendo localmente para probar estos enlaces.
        Para despliegue online, reemplaza "localhost" con la URL del servidor desplegado.
    </div>

    <h2>Campos del Personaje</h2>
    <ul>
        <li><strong>nombre:</strong> String - Nombre del personaje</li>
        <li><strong>edad:</strong> Integer - Edad del personaje</li>
        <li><strong>altura:</strong> Float - Altura en metros</li>
        <li><strong>constelacion:</strong> String - Constelación del caballero</li>
        <li><strong>urlImagen:</strong> String - URL de la imagen del personaje</li>
    </ul>

    <h2>Respuestas de Error</h2>
    <ul>
        <li><strong>400 Bad Request:</strong> Datos inválidos o campos faltantes</li>
        <li><strong>404 Not Found:</strong> Personaje no encontrado</li>
        <li><strong>500 Internal Server Error:</strong> Error del servidor</li>
    </ul>
</body>
</html>
`;

fs.writeFileSync('postman_guide.html', htmlContent);
console.log('Archivo HTML generado: postman_guide.html');

// Para generar PDF, necesitarías ejecutar: html-pdf postman_guide.html postman_guide.pdf
