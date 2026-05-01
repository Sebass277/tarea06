const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// GET: Listar todos los contactos
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener contactos', error: error.message });
    }
});

// POST: Crear un nuevo contacto
router.post('/', async (req, res) => {
    const contact = new Contact({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    });

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (error) {
        console.error('Error en POST /:', error);
        res.status(400).json({ message: 'Error al crear contacto', error: error.message });
    }
});

// PUT: Actualizar un contacto existente
router.put('/:id', async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contacto no encontrado' });
        }
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar contacto', error: error.message });
    }
});

// DELETE: Eliminar un contacto
router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contacto no encontrado' });
        }
        res.status(200).json({ message: 'Contacto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar contacto', error: error.message });
    }
});

module.exports = router;
