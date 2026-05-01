# Usar imagen oficial de Node.js v20 (Requerido por Mongoose 9)
FROM node:20-alpine

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD [ "node", "app.js" ]
