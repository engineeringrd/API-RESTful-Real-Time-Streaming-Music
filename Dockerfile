# Imagen base
FROM node:19.7.0

# Directorio de trabajo
WORKDIR /app

# Copiar archivos package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Puerto
EXPOSE 8080

# Variable de entorno para la cadena de conexión de MongoDB Atlas
ENV MONGODB_URI=mongodb+srv://admin:admin@decibelycluster.k3opvfs.mongodb.net/?retryWrites=true&w=majority

# Iniciar la aplicación
CMD ["npm", "start"]
