const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Base de datos ficticia en memoria
let contacts = [
    { _id: "1", nombre: "Juan Perez", email: "juan@example.com", telefono: "123-456" },
    { _id: "2", nombre: "Maria Lopez", email: "maria@example.com", telefono: "987-654" }
];

// GET: Listar
app.get('/api/contacts', (req, res) => {
    res.json(contacts);
});

// POST: Crear
app.post('/api/contacts', (req, res) => {
    const newContact = { _id: (contacts.length + 1).toString(), ...req.body };
    contacts.push(newContact);
    res.status(201).json(newContact);
});

// PUT: Actualizar
app.put('/api/contacts/:id', (req, res) => {
    const id = req.params.id;
    const index = contacts.findIndex(c => c._id === id);
    if (index !== -1) {
        contacts[index] = { ...contacts[index], ...req.body };
        res.json(contacts[index]);
    } else {
        res.status(404).json({ message: "No encontrado" });
    }
});

// DELETE: Eliminar
app.delete('/api/contacts/:id', (req, res) => {
    const id = req.params.id;
    contacts = contacts.filter(c => c._id !== id);
    res.json({ message: "Eliminado correctamente" });
});

app.get('/', (req, res) => {
    res.send('<h1>MODO MOCK: API corriendo sin base de datos</h1>');
});

app.listen(PORT, () => {
    console.log(`\n🚀 API MOCK corriendo en http://localhost:${PORT}`);
    console.log(`Usa 'node test-api.js' para probar los endpoints.\n`);
});
