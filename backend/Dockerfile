# Imaginea Node.js pentru backend
FROM node:18-slim

# Setăm directorul de lucru
WORKDIR /app

# Copierea fișierelor pentru instalarea dependențelor
COPY package*.json ./

# Instalarea dependențelor și curățarea cache-ului
RUN npm install && npm cache clean --force

# Copierea întregii aplicații
COPY . .

# Expunerea portului utilizat de backend
EXPOSE 5000

# Comanda de start a aplicației
CMD ["npm", "start"]