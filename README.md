# Proyecto: Gestion de Contactos - AtencionTotal

Este proyecto es una aplicacion web y una API RESTful para la gestion de contactos, desarrollada con Node.js, Express y MongoDB. Toda la infraestructura esta dockerizada con el fin de garantizar su ejecucion en cualquier entorno sin necesidad de instalar bases de datos de forma local.

## Tecnologias Utilizadas
- Backend: Node.js v20 y Express
- Base de Datos: MongoDB
- Contenerizacion: Docker y Docker Compose
- Interfaz de Usuario: HTML5, CSS3, JavaScript (Vanilla)

## Estructura del Proyecto
```
gestion-contactos/
├── models/               # Esquemas y modelos de Mongoose
├── public/               # Interfaz de usuario (HTML, CSS, JS)
├── routes/               # Rutas de la API RESTful
├── app.js                # Archivo principal de la aplicacion
├── Dockerfile            # Configuracion de Docker para Node.js
├── docker-compose.yml    # Configuracion de servicios (App y MongoDB)
└── README.md             # Documentacion
```

## Requisitos Previos
Es necesario tener instalado:
- Docker Desktop
- Docker Compose

## Instrucciones para Ejecutar el Proyecto

Sigue estos pasos para levantar la aplicacion y la base de datos:

### 1. Iniciar los Contenedores de Docker
Abre una terminal en la raiz del proyecto y ejecuta:

```bash
docker-compose up --build -d
```

Este comando descarga la imagen de MongoDB, construye la imagen de la aplicacion Node.js e inicia ambos servicios en segundo plano.

### 2. Acceder a la Interfaz Web
Una vez que los contenedores esten activos, abre el navegador e ingresa a:

http://localhost:3000

Desde aqui podras ver, agregar, editar y eliminar contactos.

### 3. Detener los Contenedores
Para apagar los servicios, ejecuta:

```bash
docker-compose down
```

## Endpoints de la API RESTful
La API expone los siguientes endpoints:

- GET /api/contacts - Obtiene todos los contactos.
- GET /api/contacts/:id - Obtiene un contacto especifico por ID.
- POST /api/contacts - Crea un nuevo contacto.
- PUT /api/contacts/:id - Actualiza un contacto.
- DELETE /api/contacts/:id - Elimina un contacto.

## Entrega - SENATI
Este proyecto fue desarrollado para la entrega de la actividad del curso en SENATI.
