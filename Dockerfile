FROM node:18

WORKDIR /app

# Copiem fișierele necesare
COPY package*.json ./

# Instalăm dependențele
RUN npm install

# Copiem restul aplicației
COPY . .

# Expunem portul pe care rulează aplicația
EXPOSE 3000

# Comanda de start a aplicației
CMD ["npm", "start"]