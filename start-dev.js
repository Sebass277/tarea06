const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

async function start() {
    console.log('--- Iniciando Servidor de Desarrollo con Base de Datos en Memoria ---');
    
    try {
        // 1. Crear instancia de MongoDB en memoria
        const mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        console.log(`Base de datos en memoria lista en: ${mongoUri}`);

        // 2. Establecer la URI en el proceso
        process.env.MONGODB_URI = mongoUri;

        // 3. Requerir e iniciar la app principal
        require('./app.js');
        
    } catch (error) {
        console.error('Error al iniciar el servidor de desarrollo:', error);
    }
}

start();
