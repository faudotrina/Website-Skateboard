FROM node:latest

WORKDIR /mysite

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers de l'application
COPY . .

# Construction de l'application
RUN npm run build

# Exposition du port de l'application
EXPOSE 3000

# Démarrage de l'application
CMD ["npm", "start"]

