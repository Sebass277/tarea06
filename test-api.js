const axios = require('axios');

const API_URL = 'http://localhost:3000/api/contacts';

async function runTests() {
    console.log('--- Iniciando pruebas de la API ---');

    try {
        // 1. POST: Crear un contacto
        console.log('\n1. Creando contacto...');
        const postRes = await axios.post(API_URL, {
            nombre: 'Prueba Docker',
            email: `test_${Date.now()}@example.com`,
            telefono: '555-1234'
        });
        console.log('Respuesta POST:', postRes.data);
        const contactId = postRes.data._id;

        // 2. GET: Listar contactos
        console.log('\n2. Listando contactos...');
        const getRes = await axios.get(API_URL);
        console.log('Contactos encontrados:', getRes.data.length);

        // 3. PUT: Actualizar contacto
        console.log('\n3. Actualizando contacto...');
        const putRes = await axios.put(`${API_URL}/${contactId}`, {
            telefono: '555-9999'
        });
        console.log('Respuesta PUT:', putRes.data);

        // 4. DELETE: Eliminar contacto
        console.log('\n4. Eliminando contacto...');
        const delRes = await axios.delete(`${API_URL}/${contactId}`);
        console.log('Respuesta DELETE:', delRes.data);

    } catch (error) {
        console.error('Error en las pruebas:', error.response ? error.response.data : error.message);
        console.log('\n[!] Asegúrate de que el servidor y MongoDB estén corriendo.');
    }
}

runTests();
