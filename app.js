const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
// Si estás en local usa localhost, si estás en Docker usa el nombre del servicio 'mongo'
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gestion-contactos';

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Conexión a MongoDB
mongoose.connect(MONGODB_URI)
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas
app.use('/api/contacts', contactRoutes);

// Ruta base
app.get('/', (req, res) => {
    res.send('<h1>Bienvenido a la API de Gestión de Contactos de AtenciónTotal</h1>');
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`API REST corriendo en http://localhost:${PORT}`);
});
