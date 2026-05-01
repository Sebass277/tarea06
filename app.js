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
const Contact = require('./models/Contact');
mongoose.connect(MONGODB_URI)
.then(async () => {
    console.log('Conexión exitosa a MongoDB');
    // Si la base de datos está vacía, insertamos datos iniciales
    const count = await Contact.countDocuments();
    if (count === 0) {
        await Contact.insertMany([
            { nombre: "Carlos Mendoza", email: "c.mendoza@atenciontotal.com", telefono: "+51 987 654 321" },
            { nombre: "Ana García", email: "a.garcia@ventas.atenciontotal.com", telefono: "+51 912 345 678" },
            { nombre: "Soporte Técnico", email: "soporte@atenciontotal.com", telefono: "0800-12345" },
            { nombre: "Recursos Humanos", email: "talento@atenciontotal.com", telefono: "01-445-5678" },
            { nombre: "Lucía Fernández", email: "l.fernandez@gerencia.com", telefono: "+51 955 443 322" }
        ]);
        console.log('Base de datos poblada con contactos iniciales.');
    }
})
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
