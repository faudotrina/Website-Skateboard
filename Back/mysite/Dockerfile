# Utilisez une image de base Python qui correspond à votre environnement de déploiement
FROM python:3.9-slim

# Mettre à jour la liste des paquets et installer les dépendances système requises
RUN apt-get update && apt-get install -y \
    libgirepository1.0-dev \
    gcc \
    libcairo2-dev \
    pkg-config \
    python3-dev \
    libdbus-1-dev \
    libsystemd-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /mysite

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY requirements.txt .

# Installer les dépendances Python
RUN pip install -r requirements.txt

# Copier le reste des fichiers de l'application
COPY . .

EXPOSE 8000

CMD ["python", "myapp/apps.py"]
