const mongoose = require('mongoose');

// Definición del esquema de contacto
const contactSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true,
        match: [/.+\@.+\..+/, 'Por favor ingrese un email válido']
    },
    telefono: {
        type: String,
        required: [true, 'El teléfono es obligatorio']
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contact', contactSchema);
