const axios = require('axios');

const API_URL = 'http://localhost:3000/api/contacts';

const realContacts = [
    { nombre: "Carlos Mendoza", email: "c.mendoza@atenciontotal.com", telefono: "+51 987 654 321" },
    { nombre: "Ana García", email: "a.garcia@ventas.atenciontotal.com", telefono: "+51 912 345 678" },
    { nombre: "Soporte Técnico", email: "soporte@atenciontotal.com", telefono: "0800-12345" },
    { nombre: "Recursos Humanos", email: "talento@atenciontotal.com", telefono: "01-445-5678" },
    { nombre: "Lucía Fernández", email: "l.fernandez@gerencia.com", telefono: "+51 955 443 322" }
];

async function seed() {
    console.log('--- Poblando base de datos con contactos reales ---');
    for (const contact of realContacts) {
        try {
            await axios.post(API_URL, contact);
            console.log(`✅ Insertado: ${contact.nombre}`);
        } catch (error) {
            console.log(`❌ Error con ${contact.nombre}: ${error.response ? error.response.data.message : error.message}`);
        }
    }
    console.log('\n--- Proceso terminado ---');
}

seed();
